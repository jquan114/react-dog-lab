import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Gifs from "./components/Gifs";

function App() {
const [gifSrc,setGifSrc] = useState({});

const handleSubmit = async () => {
  const myKey = "W9ThL38OlmMnIif0P13v036495Y4OMVA";
  const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}`;

  let res = await fetch(gifSrc);
  let json = await res.json();
  console.log("adding url", json.data.image_url);
  setGifSrc(json.data);
}

  return (
  <div className="App">
      <h1> Giphy</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      {/* CONDITIONAL RENDERING */}
      {gifSrc.image_url ?
      <Gifs gifSrc={gifSrc} />
        :
      <h2>Pull random gifs from Giphy</h2>
     }
</div>
  );
}

export default App;
