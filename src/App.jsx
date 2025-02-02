
import React from "react";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Video from "./Pages/Video/video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId:/videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App;