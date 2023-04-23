import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from './CartContext';

const Singleproduct = () => {
    const par = useParams();
    const [Singleproduct, setSingleproduct] = useState({});
    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${par._id}`)
            .then(res => res.json())
            .then(re => { setSingleproduct(re) })
    },[])

    const { cart , setcart } = useContext(CartContext)

    const [isAdding , setisAdding] = useState(false)

    const AddtoCart =(event,Singleproduct) => {
      
        event.preventDefault()
   
          const _cart = {...cart}
          if(!_cart.items)
          {
             _cart.items = {}
          }
   
          if(!_cart.items[Singleproduct._id])
          {
           _cart.items[Singleproduct._id]=0;
          }
   
          if(!_cart.totalitems)
          {
             _cart.totalitems=0;
          }
   
          if(!_cart.total)
          {
              _cart.total=0;
          }
   
          _cart.items[Singleproduct._id]++;
          _cart.totalitems++;
          _cart.total += Singleproduct.price;

          setisAdding(true)

       setTimeout(() => {
        setisAdding(false)
       }, 1000);
   
          setcart(_cart);
     }
    return (
        <div className='h-1/6 w-40 absolute top-24 left-14'>
            <img className='h-44 ml-2' src={Singleproduct.image} alt="" />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold'>{Singleproduct.name}</h1>
                <small className='bg-gray-200 rounded-full px-2 font-semibold'>{Singleproduct.size}</small>
            </div>
            <div className='flex justify-between'>
                <span className='font-semibold'>{Singleproduct.price}$</span>
                <button onClick={(event) => { AddtoCart(event, Singleproduct) }} className={`${isAdding ? `bg-green-600` : `bg-yellow-500`} px-2 rounded-full font-semibold`}>{isAdding ? `Added` : `Add`}</button>
            </div>
        </div>
    )
}

export default Singleproduct