
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./layout";
import Home from "./home";
import pasdepage from "./nopage";
import Quiz from "./quiz";
import Shop from "./shop";

import Counter from './Counter'
import shopContext from "./shopContext";

function App() {
  

  return (
    <>
      <div className='app'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="counter" element={<Counter />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="shop" element={<shopContext><Shop /></shopContext>} />
              <Route path="*" element={<pasdepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
