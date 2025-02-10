import React from "react";
import LoadParent from "./components/Loading/LoadParent";
import Home from "./components/LandingPage/Home";

const App = () => {
  return (
    <div className="h-screen bg-gray-900 overflow-hidden">
         <LoadParent/>
         <Home/>
    </div>
  );
};

export default App;
