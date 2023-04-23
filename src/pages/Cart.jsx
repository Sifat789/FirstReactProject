import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"
import Products from "./Products";
import Cartitems from "./Cartitems";
import { DelContext } from "./DelContext";

const Cart = () => {

  const { cart , setcart } = useContext(CartContext);
  const [products, setproducts] = useState([]);
  let { del, setdel } = useContext(DelContext);

  useEffect(()=>{
    if(del==0) setdel(1);
    else setdel(0);
  },[])

  useEffect(() => {
    if (cart != null)
      fetch("https://star-spark-pasta.glitch.me/api/products/cart-items", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ ids: Object.keys(cart.items) }),
      })
        .then(res => res.json())
        .then(res => {
          setproducts(res);
        })
  }, [del])
   
  const ClearCart = () =>
  {
     let _cart ={...cart};
      Object.keys(_cart.items).forEach(key => delete _cart.items[key]);
      _cart.total=0;
      _cart.totalitems=0;
      if(del==0) setdel(1);
      else setdel(0);

      setcart(_cart)

      alert("Order Placed (Fake)")
  }

  return (
    <div>
      {
        cart==null ? (<h1  className="flex justify-center items-end text-gray-300 h-72 font-bold text-7xl">Wow , such empty :</h1>) : 
        (
        cart.total == 0 ? (
          <h1 className="flex justify-center items-end text-gray-300 h-72 font-bold text-7xl">Wow , such empty :)</h1>
        ) : 
        (
          <div className="flex flex-col">
            <div>
            {products.map(product => <Cartitems product={product} key={product._id} />)}
            </div>



            <div className="flex mt-20 justify-end items-end flex-col w-screen">
              <b className=" mr-11">Grand Total: {cart.total} $</b>
              <button onClick={ClearCart} className=" mr-12 bg-yellow-500 rounded-full px-2 mt-2" >Order Now</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart