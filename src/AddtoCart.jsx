import { useContext } from "react"
import { CartContext } from "./CartContext"

const {cart,setcart} = useContext(CartContext);

const AddtoCart =(props) => {

    const {event , product} = props;
      
    event.preventDefault()

      const _cart = {...cart}
      if(!_cart.items)
      {
         _cart.items = {}
      }

      if(!_cart.items[product._id])
      {
       _cart.items[product._id]=1;
      }
      else {
       _cart.items[product._id]++;  
      }

      if(!_cart.totalitems)
      {
         _cart.totalitems=1;
      }
      else{
       _cart.totalitems++;
      }

      setcart(_cart);
 }

 export default AddtoCart;