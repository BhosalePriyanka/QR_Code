import './App.css';
import {Button, Form, FormGroup,Image} from 'react-bootstrap'

import { useState } from 'react';


function App() {
  const[input,setInput] = useState('')
  const[info,setInfo] = useState('')
  const[err,setError] = useState('')

  const handelChange = (e) =>{
setInput({[e.target.name] : e.target.value})
  }
  console.log(input)
const handelSubmit = async(event) =>{
  event.preventDefault();
const response = await fetch('http://localhost:4000/api',
{ method:'POST',
  body:JSON.stringify(input),
  headers:{
    'Content-Type':'application/json' 
  }
})
const data = await response.json()
console.log(data)
setInfo(data)
setError(data)
setInput({input:''})
}



  return (
    <div className="App">
      <h1>QR CODE</h1>
      <FormGroup className='w-50 mx-auto'>
      <Form.Control as="textarea" rows={3}  placeholder='Enter Text' name = 'text' value = {input.text} onChange={handelChange}/>
      </FormGroup>
      <Button onClick={handelSubmit}>Genrate QR Code</Button>
      <br/>
      <Image src = {info}/>
      {err && <p>{err.err}</p>}
    </div>
  );
}

export default App;
