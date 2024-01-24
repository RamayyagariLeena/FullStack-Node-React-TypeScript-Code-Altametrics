import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

interface Props {
  data: Object[];
  handleRowClick: Function;
}

type details = {
  id : Number;
  columns: Object[];
  row: Object
}


const columns: GridColDef[] = [
  { field: "due_date", headerName: "Date", flex: 1 },
  { field: "description", headerName: "Description",flex: 1},
  { field: "payee", headerName: "Payee", flex: 1},
  {
    field: "received",
    headerName: "Received",
    flex: 1
  },
  {
    field: "spent",
    headerName: "Spent",
    sortable: false,
    flex: 1
  }
];



export default function DataTable(props : Props) {
  const {data, handleRowClick} = props;
  

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        onRowClick={(event: Event, details: details)=>handleRowClick(event,details)}
      />
    </div>
  );
}
