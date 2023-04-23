import React, { useContext, useState } from 'react'
import Product from '../Product'
import { CartContext } from '../CartContext';
import {DelContext} from './DelContext';

const Cartitems = (props) => {
    const { product } = props;
    const { cart, setcart } = useContext(CartContext);

    const { del , setdel } = useContext(DelContext);


    const Deleteitem = (product) => 
    {
        let _cart = {...cart};

        _cart.totalitems-=_cart.items[product._id]

        _cart.total-=(_cart.items[product._id]*product.price)

        _cart.items[product._id]=0

        delete _cart.items[product._id];

        setcart(_cart);

        if(del==1)
          setdel(0)
        else setdel(1)
    }

    const AddtoCart = (product) => {

        let _cart = { ...cart }
        if (!_cart.items) {
            _cart.items = {}
        }

        if (!_cart.total) {
            _cart.total = 0;
        }

        if (!_cart.totalitems) {
            _cart.totalitems = 0;
        }

        if (!_cart.items[product._id]) {
            _cart.items[product._id] = 0;
        }


        _cart.items[product._id]++;
        _cart.totalitems++;
        _cart.total += product.price;

        setcart(_cart);
    }

    const DeletefromCart = (product) => {

        const _cart = { ...cart }
        if (!_cart.items) {
            _cart.items = {}
        }

        if (!_cart.total) {
            _cart.total = 0;
        }

        if (!_cart.totalitems) {
            _cart.totalitems = 0;
        }

        if (!_cart.items[product._id]) {
            _cart.items[product._id] = 0;
        }


        if (_cart.items[product._id] != 1) {
            _cart.items[product._id]--;
            _cart.totalitems--;
            _cart.total -= product.price;
        }


        setcart(_cart);
    }

    return (
        <div className='flex mb-10 relative top-24 justify-between container mx-auto items-center'>
            <div className='w-1/5'><img className='h-12' src={product.image} alt="" /></div>
            <div className='w-1/5'><h1>{product.name}</h1></div>
            <div className='flex justify-center w-1/5'>
                <button onClick={() => { DeletefromCart(product) }} className='bg-yellow-500 rounded-full px-3 font-semibold mr-2'>-</button>
                <span className='mr-2'>{cart.items[product._id]}</span>
                <button onClick={() => { AddtoCart(product) }} className='bg-yellow-500 rounded-full px-3 font-semibold'>+</button>
            </div>

            <span className='w-1/5'>{product.price}</span>
            <button onClick={()=> {Deleteitem(product)}} className='bg-red-600 rounded-full font-semibold text-white px-2'>Delete</button>
        </div>
    )
}

export default Cartitems