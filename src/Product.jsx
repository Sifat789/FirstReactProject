import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import  { CartContext }  from './CartContext';

const Product = (props) => {

  const {cart , setcart} =useContext(CartContext)

  const { product } = props;
   
  const [isAdding , setisAdding] = useState(false)

  const AddtoCart =(event, product) => {
      
     event.preventDefault()

       const _cart = {...cart}
       if(!_cart.items)
       {
          _cart.items = {}
       }

       if(!_cart.items[product._id])
       {
        _cart.items[product._id]=0;
       }

       if(!_cart.totalitems)
       {
          _cart.totalitems=0;
       }

       if(!_cart.total)
       {
           _cart.total=0;
       }

       _cart.items[product._id]++;
       _cart.totalitems++;
       _cart.total += product.price;

       setcart(_cart);

       setisAdding(true)

       setTimeout(() => {
        setisAdding(false)
       }, 1000);
  }

  return (
    <Link to={`/Products/${product._id}`}>
      <div className='h-1/6 w-40'>
        <img className='h-36 ml-2' src={product.image} alt="" />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold'>{product.name}</h1>
          <small className='bg-gray-200 rounded-full px-2 font-semibold'>{product.size}</small>
        </div>
        <div className='flex justify-between'>
          <span className='font-semibold'>{product.price}$</span>
          <button onClick={(event) => { AddtoCart(event, product) }} className={`${isAdding ? `bg-green-600` : `bg-yellow-500`} px-2 rounded-full font-semibold`}>{isAdding ? `Added` : `Add`} </button>
        </div>
      </div>
    </Link>
  )
}

export default Product