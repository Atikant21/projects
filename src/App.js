import React from "react";
// import Header from "./pages/Header";
// import NavBar from "./pages/NavBar";
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Food from "./pages/Food";
// import Technology from "./pages/Technology";
// import Tourism from "./pages/Tourism";
// import Fitness from "./pages/Fitness"; 
   import  LandingPage from "./pages/LandingPage";

const App= () => {
  return (
    <LandingPage/>
  
    // <Router>
    //   <div>
    //     <Header/>
    //   <NavBar/>
    //   <Routes>
    //     <Route path="/" elements={<Home/>} />
    //     <Route path="/movies" elements={<Movies/>} />
    //     <Route path="/food" elements={<Food/>} />
    //     <Route path="/technology" elements={<Technology/>} />
    //     <Route path="/tourism" elements={<Tourism/>} />
    //     <Route path="/fitness" elements={<Fitness/>} />

    //   </Routes>
    //   </div>
    // </Router>

  );
};

export default App;
