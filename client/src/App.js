import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My React App</h1>
      <Footer />
    </div>
  );
}

export default App;
