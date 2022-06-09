import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Dogs from "./components/Dogs";

function App() {
  ////use state
const [info,setInfo] = useState({});

const handleSubmit = async () => {
  const api_Endpoint = `https://dog.ceo/api/breeds/image/random`;

  let res = await fetch(api_Endpoint);
  let data = await res.json();
  console.log("adding url", data.message);
  setInfo(data.message);
}
//render//
  return (
  <div className="App">
      <h1> Get Random Dog Photo Generator</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      {/* CONDITIONAL RENDERING */}
      {info ?
      <Dogs propDog={info} />
        :
      <h2>Pull random dogs from and API</h2>
     }
</div>
  );
}

export default App;
