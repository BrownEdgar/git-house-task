import { useState } from 'react'
import "./WebSlices.scss"

export default function WebSlices() {
    const [webSlice, setWebSlice] = useState([
        {
            id:1,
            image:"./images/web images/web1.png"
        },
        {
            id:2,
            image:"./images/web images/web2.png"
        },
        {
            id:3,
            image:"./images/web images/web3.png"
        },
        {
            id:4,
            image:"./images/web images/web4.png"
        }
    ])
  return (
    <div className='WebSlices'>
            <h2 className='header'>Our Incridible Partners</h2>
            <div className="container">
            {
               webSlice.map(elem =>{
                return (
                    <div key={elem.id}>
                        <img src={elem.image}/>
                    </div>
                )
               }) 
            }
        </div>
    </div>
  )
}
