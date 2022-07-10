
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Account from './Account'
import Home from './Home'
import NavBar from './components/NavBar'
import Cart from './Cart'


function App() {
  return(
  <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path="/account-info" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
