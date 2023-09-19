
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./layout";
import Home from "./home";
import pasdepage from "./nopage";

import Counter from './Counter'

function App() {
  

  return (
    <>
      <div className='app'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="counter" element={<Counter />} />
              
              <Route path="*" element={<pasdepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
