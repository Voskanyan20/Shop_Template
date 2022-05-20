import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product-details' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;