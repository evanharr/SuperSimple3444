import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Account from './Account'
import Home from './Home'



function App() {
  return(
  <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path="/account-info" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
