
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'
import { HashRouter } from 'react-router-dom';
import About from "./Pages/About";
function App() {
  return (
    
    <div className="App">
    
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
       <Footer />
    </div>
  );
 
}

export default App;
