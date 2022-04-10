import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Sports from "./components/Sports";
import Players from "./components/Players";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://amiiboapi.com/api/amiibo/?gameseries=Super Mario"
    );
    setData(response.data.amiibo);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData2 = async () => {
    const response = await axios.get(
      "https://amiiboapi.com/api/amiibo/?gameseries=Mario Sports Superstars"
    );
    setData2(response.data.amiibo);
  };

  useEffect(() => {
    getData2();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters data={data} />} />
        <Route path="/characters/:name" element={<Character data={data} />} />
        <Route path="/sports" element={<Sports data={data2} />} />
        <Route path="/sports/:name" element={<Players data={data2} />} />
      </Routes>
    </div>
  );
}

export default App;
