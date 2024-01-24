import * as React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import {useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginSuccess } from '../store/actions/authActions';
import { useSelector } from 'react-redux';
type AuthState = {
  isAuthenticated: boolean;
}

type RootState = {
  auth: AuthState;
}

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: data.get('email'),
          password: data.get('password')
        });
        const userDetails = await response.data;
        console.log(userDetails)
        dispatch(loginSuccess(userDetails));
        navigate('/App/Home')
      } catch (error) {
        console.log(error)
        enqueueSnackbar('Invalid username or password', {
            variant: "error",
        })
      }
  };

  return (
    <>
    { !auth.isAuthenticated ? 
    (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>)
      : navigate('/App/Home')}
      </>
  );
}