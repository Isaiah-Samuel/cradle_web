import React from "react";
// import HomePage from "./Pages/HomePage"; 
// import Admission from "./Pages/Admission";
// import Schools from "./Pages/Schools";
import About from "./Pages/About";
import { BrowserRouter as Router,/* Route, Link*/ } from 'react-router-dom';


 function App(){
  return(
    <Router>
      {/* <HomePage/> */}
      {/* <Admission/> */}
      {/* <Schools/> */}

      <About/>

    </Router>
    
  );
}

export default App;