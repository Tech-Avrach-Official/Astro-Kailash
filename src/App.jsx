import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./footer/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
