import React from "react";
// import HomePage from "./Pages/HomePage"; 
// import Admission from "./Pages/Admission";
import Schools from "./Pages/Schools";
import { BrowserRouter as Router,/* Route, Link*/ } from 'react-router-dom';


 function App(){
  return(
    <Router>
      {/* <HomePage/> */}
      {/* <Admission/> */}
      <Schools/>


    </Router>
    
  );
}

export default App;