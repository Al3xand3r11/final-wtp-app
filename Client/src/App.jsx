import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
    "collection": "Collection2",
    "database": "Wtp-1",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-asfaq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'W6WdTQhOsrNE80sIlGwXfwO1FMZguWTadnXtpAMhoaguTdeMu1wKo5p7sHfjP7hO',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form onSubmit={collectData}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" 
            value={name} onChange={(e) => setName(e.target.value) }
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
            value={email} onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
