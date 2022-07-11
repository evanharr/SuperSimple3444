
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Account from './Account'
import Home from './Home'
import Vehicles from './Vehicles';
import NavBar from './components/NavBar'
import Cart from './Cart'
import Checkout from './Checkout'


function App() {
  return(
  <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path='/SuperSimple3444' element ={<Home />}></Route>
          <Route path="/account-info" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/vehicle-page" element={<Vehicles />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
