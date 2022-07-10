
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Account from './Account'
import Home from './Home'
import Vehicles from './Vehicles';
import NavBar from './components/NavBar'


function App() {
  return(
  <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path="/account-info" element={<Account />}></Route>
          <Route path="/vehicle-page" element={<Vehicles />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
