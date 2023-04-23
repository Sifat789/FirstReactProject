import { useEffect, useState } from "react"
import Product from "../Product"
import Products from "./Products"

export const Home = () => {
    const _id = '60c67ba9f5ee510015f3dda6'; 
    const [Im, setIm] = useState({});
    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${_id}`)
            .then(res => res.json())
            .then(re => { setIm(re) })
    },[])
    return (
        <div>
            <div className="flex justify-around items-center mt-10">
                <div>
                    <h1 className="font-bold">Are you hungry?</h1>
                    <h1 className="font-bold text-5xl">Don't wait!</h1>
                    <button className="bg-yellow-500 rounded-full font-bold text-sm p-1 mt-2">Order Now</button>
                </div>
                <img className="h-64 rounded-full " src={Im.image} alt="" />
            </div>

            <div className="mt-10 ml-10">
                <Products />
            </div>
        </div>
    )
}
