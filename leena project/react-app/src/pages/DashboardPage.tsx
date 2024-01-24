import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoices } from "../store/reducers/invoices/invoiceSlice";
import { RootState } from "./store/store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DataTable from "../components/DataTable";
import Home from "../components/Home";
import Dashboards from "../components/Dashboards";
import Expenses from "../components/Expenses";
import Reports from "../components/Reports";
import Accounting from "../components/Accounting";
import Bills from "../components/Bills";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import DialogBox from "../components/DialogBox"
import Button from '@mui/material/Button';
import { logout } from "../store/actions/authActions";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

type details = {
  id : Number;
  columns: Object[];
  row: Object
}

export default function DashboardPage(props: Props) {
  const { window } = props;
  const location = useLocation();
  const currentLocation =
    location.pathname !== "/" ? location.pathname : "Home";
  console.log(currentLocation);
  const [pageName, setPagename] = React.useState(
    currentLocation.replace("/App/", "")
  );
  const dispatch = useDispatch();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const status = useSelector((state: RootState) => state.invoices.status);
  const error = useSelector((state: RootState) => state.invoices.error);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState({})
  const handleRowClick = (details :details , e : Event) => {
    console.log(details.row, "row data")
    setDialogData(details.row)
    setDialogOpen(true)
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchInvoices());
    }
  }, [status, dispatch]);

  console.log(invoices, "invoices");
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log(invoices);

  const onMenuItemClick = (e: Event) => {
    setPagename(e.target.innerText);
    navigate(`/App/${e.target.innerText}`);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/")
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Home",
          "Dashboards",
          "Invoices",
          "Bills",
          "Expenses",
          "Reports",
          "Accounting",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={(e) => onMenuItemClick(e)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {auth.isAuthenticated ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <Typography variant="h6" noWrap component="div">
                {pageName}
              </Typography>
              <Typography variant="h6" noWrap component="div">
                <Button sx={{color: 'white'}} onClick={handleLogoutClick}>Logout</Button>
              </Typography>
            </Toolbar>
            
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              ModalProps={{
                keepMounted: true, 
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Dashboards" element={<Dashboards />} />
              <Route path="/Invoices" element={<DataTable data={invoices} handleRowClick={handleRowClick}/>} />
              <Route path="/Expenses" element={<Expenses />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Accounting" element={<Accounting />} />
              <Route path="/Bills" element={<Bills />} />
            </Routes>
          </Box>
          <DialogBox open={dialogOpen} data={dialogData} setDialogOpen={setDialogOpen}/>
        </Box>
        
      ) : navigate('/')}
    </>
  );
}
