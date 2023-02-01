import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import About from "./pages/About/About";
import Countrydtls from "./pages/Countrydetails/Countrydtls";
import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [state, setState] = useState("");
  const handleSearch = (search) => {
    setState(search);
  };
  return (
    <div>
      <Navbar searchData={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchData={state} />}></Route>
        <Route path="/blog" element={<About />}></Route>
        <Route path="/name/:name" element={<Countrydtls />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
