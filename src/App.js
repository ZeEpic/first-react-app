import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="Nav">
          <NavBar />
        </div>
        <header className="App-header">
          <main className="container">
            <Counters />
          </main>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
