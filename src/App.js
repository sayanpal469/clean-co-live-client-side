import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";

function App() {
  return (
      <Nav>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/services" element={ <Services/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/login" element={ <Login/> }/>
        </Routes>
      </Nav>
  );
}

export default App;
