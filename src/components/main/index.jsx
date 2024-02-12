import styles from "./styles.module.css";
import React, { useState } from "react"
import axios from 'axios'

const Main = () => {
	const [file, setFile] = useState()
	const upload = () => {
	  const formData = new FormData()
	  formData.append('file', file)
	  axios.post('http://localhost:8080/upload',formData )
	  .then( res => {window.alert('file uploaded :)')})
	  .catch(er => console.log(er))
	}
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1 className={styles.navbar}>File Uploader</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		<div className="App">
      <div className="App-header"> 
          <h1 className={styles.mainHeading}>
          Hey! Please select your file to be uploaded
          </h1>
          <br/>
          <input  className="button-55" type="file" onChange={(e) => setFile(e.target.files[0])}/>
          <br/>
          <button  className="button-55"type="button" onClick={upload}>Upload</button>
      </div>
      </div>

		</div>
	);
};

export default Main;