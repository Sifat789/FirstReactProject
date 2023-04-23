import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

const Navigation = () => {
  const _id = '60c67b32f5ee510015f3dda0'; 
    const [Im, setIm] = useState({});
    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${_id}`)
            .then(res => res.json())
            .then(re => { setIm(re) })
    },[])

    const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 mt-2">
        <Link to="/"><img className='h-10 rounded-full ml-16' src={Im.image} alt="" /></Link>
        <h1>Pizza</h1>
        </div>
        <ul className="flex space-x-2 mr-4">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Products'>Products</Link></li>
            <li><Link to='/Cart'><span className="bg-yellow-500 rounded-full px-3">{cart!=null ? cart.totalitems : 0}</span></Link></li>
        </ul>
    </div>
  )
}

export default Navigation