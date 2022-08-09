
import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Account from './Account'
import Home from './Home'
import Vehicles from './Vehicles';
import NavBar from './components/NavBar'
import Cart from './Cart'
import Checkout from './Checkout'
import CarConfig from './CarConfig'
import SavedCarConfig from './SavedCarConfig'
import LandCruiserConfig from './LandCruiserConfig'
import { AuthProvider } from "./AuthContext"

import Register from "./register2"
function App() {
  return(
    
  <div>
    <HashRouter>
    <AuthProvider>
 
    <NavBar />
      <Routes>
          <Route path="/SuperSimple3444" element ={<Home />}></Route>
          <Route path="/account-info" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/vehicle-page" element={<Vehicles />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/car-configuration" element={<CarConfig />}></Route>
          <Route path="/register2" element={<Register />}></Route>
          <Route path="/account-info/SavedCarConfig" element={<SavedCarConfig />}></Route>
          <Route path="/LandCruiserConfig" element={<LandCruiserConfig />}></Route>
          
      </Routes>
      
      </AuthProvider>
    </HashRouter>
  </div>
  )
}

export default App;



