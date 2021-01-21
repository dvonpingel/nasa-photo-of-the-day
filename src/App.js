import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Content from './components/content';

function App() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((res) => {
      console.log(res.data);
      setApod(res.data);
    })
    .catch((err) => console.log(err));
  }, []);






  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Content apod={apod}/>
    </div>
  );
}

export default App;
