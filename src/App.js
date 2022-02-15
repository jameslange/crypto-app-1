import NftsFromWallet from "./components/NFTComponents/NftsFromWallet";
import "./index.js";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
 

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/crypto-app-1" element={<Home />} />
          <Route path="/searchnftsbywallet" element={<NftsFromWallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
