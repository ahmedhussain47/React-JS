import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from './Pages/Gallery';
import Product from './Pages/Product';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import CustomLayout from './component/CustomLayout';

function App() {
  return (
    <>   
    <BrowserRouter >
      <Routes>
      <Route element={<CustomLayout/>}>
                  <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/signup' element={<Signup/>} />
          </Route>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
