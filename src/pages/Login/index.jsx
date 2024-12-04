import React, {useState, useEffect} from 'react';
import { FormControl, Grid, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {

  const [Login , setLogin] = useState('');

  return (
    <Grid item xs={12}>
        <FormControl fullWidth>
            <Input id="Login_nome" aria-describedby="Login_nome_helper_text" value={Login}
             onChange={e => { setLogin(e.target.value); } } />
            <FormHelperText id="Login_nome_helper_text">Login.</FormHelperText>
        </FormControl>
    </Grid>
  );
}

export default Login;

