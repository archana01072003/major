import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Favorites from "../favorites/favorites.js";
import Feed from "../feed/feed.js";
import Library from "../library/library.js";
import Player from "../player/player.js";
import Trending from "../trending/trending.js";
import "./home.css";
import Login from "../auth/login.js";
const home = () => {
  return (
    <Router>
       <div className='main-body'>
        <Sidebar/>
        <Login/>
         {/* <Routes>
           
            <Route path="/" element={<Library/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes> */}
         </div>
    </Router>
   
  )
}

export default home