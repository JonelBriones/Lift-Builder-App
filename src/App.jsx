import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./views/Main/Main.view";
import Login from "./views/Login/Login.view";
import Profile from "./views/Profile/Profile.view";
// import Navbar from './components/Navbar/Navbar.component'
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <div className="wrapper"> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/:page" element={<Main />} />
          <Route path="/:login" element={<Login />} />
          <Route path="/main/:page" element={<Profile />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
