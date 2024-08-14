import React,{useState} from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';
import PlaceOrder from './PlaceOrder';
import Footer from './Footer';
import LoginPopup from './LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'> 
      
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
