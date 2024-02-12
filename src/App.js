import React, { useState } from "react"
import axios from 'axios'

import './App.css';

function App() {
  const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:8080/upload',formData )
    .then( res => {window.alert('file uploaded :)')})
    .catch(er => console.log(er))
  }
  return (
    <div className="App">
      <div className="App-header"> 
          <h1>
          Hey! Please select your file to be uploaded
          </h1>
          <br/>
          <input  className="button-55" type="file" onChange={(e) => setFile(e.target.files[0])}/>
          <br/>
          <button  className="button-55"type="button" onClick={upload}>Upload</button>
      </div>
      </div>
  );
}

export default App;
