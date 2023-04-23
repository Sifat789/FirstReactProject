import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom';
import { Home } from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Navigation from './Navigation';
import Singleproduct from './Singleproduct';
import { CartContext } from './CartContext';
import { DelContext } from './pages/DelContext';


function App() {

  const [cart, setcart] = useState(null);
  const [ del , setdel ] = useState(1);

  useEffect(() => {
    const car = window.localStorage.getItem(`cartItems`);
    // console.log(`car is = ${car}`)
    setcart(JSON.parse(car));
    // if(car!=null)
    // {
    //   setcart(JSON.parse(car));
    // }
  }, [])

  useEffect(() => {
    // console.log(cart)
    if (cart != null)
      window.localStorage.setItem(`cartItems`, JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setcart }}>
          <DelContext.Provider value={{ del , setdel }}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Products/:_id' element={<Singleproduct />} />
          </Routes>
          </DelContext.Provider>
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App
