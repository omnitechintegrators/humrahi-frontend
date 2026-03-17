import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import SingleBlog from "./pages/SingleBlog";
import Volunteer from "./pages/Volunteer";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import ScrollToHash from "./utils/ScrollToHash.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
         <ScrollToHash />
         <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
