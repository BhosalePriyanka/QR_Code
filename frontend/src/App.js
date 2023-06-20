import './App.css';
import {Button, Form, FormGroup,Image} from 'react-bootstrap'

import { useState } from 'react';


function App() {
  const[input,setInput] = useState({
    text:''
  })
  const[info,setInfo] = useState('')
  const[error,setError] = useState('')

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
    'Content-Type':'application/json',
  }
})
const data = await response.json()

if(data.error){
  setError(data.error)

  
}
if(!data.error){
  setInfo(data)
  setInput({text:" "})
  setError('')
}
}

console.log(error)

  return (
    <div className="App">
      <h1>QR CODE</h1>
      <FormGroup className='w-50 mx-auto'>
      <Form.Control as="textarea" rows={3}  placeholder='Enter Text' name = 'text' value = {input.text} onChange={handelChange}/>
      </FormGroup>
      <Button onClick={handelSubmit}>Genrate QR Code</Button>
      <br/>
      <Image src = {info}/>
      {error && <p className='text-danger'>{error}</p>}
    </div>
  );
}

export default App;
