import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data.js";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    console.log("remove id in app.js : " + id);
    const newTours = tours.filter((tour) => tour.id !== id);
    console.log("tour id in app.js : " + newTours);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTours={removeTour}></Tours>
    </div>
  );
};

export default App;
