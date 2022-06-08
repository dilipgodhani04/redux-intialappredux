import * as React from 'react';

import TextField from '@mui/material/TextField';
import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import { useSelector,useDispatch} from 'react-redux';
import {increement, decreement} from './Action/index';

function App() {
  const myState =useSelector((state)=>state.newNumber);
  const dispatch =useDispatch();
  // const dispatch =useDispatch();
  return (
  <>
  <Container fixed>
      <h1>Increement / Decreement Counter</h1>
      <Button variant="contained" onClick={()=>dispatch(decreement())}>-</Button>
      
      <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          value={myState}
        />
      <Button variant="contained" onClick={()=>dispatch(increement())} >+</Button>
      </Container>
    </>
  );
}

export default App;
