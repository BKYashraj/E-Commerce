import { Grid, TextField, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
 const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // to not refresh the form

    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      
    }
    console.log("user data",userData);
    // dispatch(register(userData))
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
            
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">if you don't have account ?</p>
          <Button
            onClick={() => navigate("/Register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>

    </div>
  )
}

export default LoginForm