import { useEffect, useState, createContext } from "react"
import Product from "../Product"
import { Link } from "react-router-dom";


const Products = () => {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://star-spark-pasta.glitch.me/api/products")
      .then(res => res.json())
      .then(pr => {
        setProducts(pr)
      })
  }, [])



  return (
    <div>
      <h1 className="font-bold mt-4 ml-10">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-16 ml-10">
        {
          Products.map(product => <Product key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Products