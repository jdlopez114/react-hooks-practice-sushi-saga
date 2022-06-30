import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [beltPosition, setBeltPosition] = useState(0);

  const DISPLAY_COUNT = 4;

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
  }, [])

  function setEaten(id) {
    setSushis(sushis.map((sushi) => 
      sushi.id === id ? {...sushi, eaten: true} : sushi
      )
    )
  }
  
  function advanceBelt() { 
    setBeltPosition((beltPosition + DISPLAY_COUNT) % sushis.length)
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis.slice(beltPosition, beltPosition + DISPLAY_COUNT)} 
        handleMoreClick={advanceBelt}
        handleEatSushi={setEaten}
      />
      <Table />
    </div>
  );
}

export default App;
