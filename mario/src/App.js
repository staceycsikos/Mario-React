import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Series from "./components/Series";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://amiiboapi.com/api/amiibo/?gameseries=Super Mario"
    );
    setData(response.data.amiibo);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters data={data} />} />
        <Route path="/characters/:name" element={<Character data={data} />} />
        <Route path="/series" element={<Series data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
