import React, { useState } from 'react'
import './HouseSlice.scss'

export default function HouseSlice() {
    const [houseSlice, setHouseSlice] = useState([
        {
          id:1,  
          image:"./images/house1.jpg",
          name: "Meadow viwe",
          discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
          price: "$570"
        },
        {
            id:2,
            image:"./images/house2.jpg",
            name: "Orchard House",
            discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
            price: "$570"
        },
        {
            id:3,  
            image:"./images/house3.jpg",
            name: "School House",
            discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
            price: "$570"
        },
        {
           id:4,
           image:"./images/house4.jpg",
           name: "Meadow viwe",
           discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
           price: "$570"
        },
        {
          id:5,
          image:"./images/house5.jpg",
          name: "Orchard House",
          discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
          price: "$570"
        },
        {
         id:6,
         image:"./images/house6.jpg",
         name: "School House",
         discription: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
         price: "$570"
        }

    ])
  return (
    <div className='HouseSlice'>
      <div className="container">
        <h2>Best Property Deals</h2>
      {
        houseSlice.map(house =>{
          return (
            <div className="HouseSlice__slice" key={house.id}>
              <img src={house.image} />
                            
              <div className="HouseSlice__text">
              <h3>{house.name}</h3>
                 <p>{house.discription}</p>
              </div>
              
              <div className="HouseSlice__price">
                <p>{house.price}</p>
              </div>
            </div>
          )
        })
      }
      <button>View All Property</button>
      </div>
    </div>
  )
}
