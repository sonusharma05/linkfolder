import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Signup from "./pages/Signup";
import Links from "./pages/Links";
import Signin from "./pages/Signin";


function App() {
  return (
    <Routes>
      <Route path="/" element={< Signin />} />
      <Route path="/home" element={< Home />} />
      <Route path="/signup" element={< Signup />} />
      <Route path="/links" element={< Links />} />


    </Routes>
  );
}

export default App;
