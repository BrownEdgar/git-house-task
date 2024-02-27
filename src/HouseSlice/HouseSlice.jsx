import React, { useState } from 'react'
import './HouseSlice.scss'

export default function HouseSlice() {
    const [houseSlice, setHouseSlice] = useState([
        {
          id:1,  
          image:"./images/houseSlice/house1.jpg",
          name: "Meadow viwe",
          description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
          price: "$ 570.00"
        },
        {
            id:2,
            image:"./images/houseSlice/house2.jpg",
            name: "Orchard House",
            description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
            price: "$ 570.00"
        },
        {
            id:3,  
            image:"./images/houseSlice/house3.jpg",
            name: "School House",
            description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
            price: "$ 570.00"
        },
        {
           id:4,
           image:"./images/houseSlice/house4.jpg",
           name: "Meadow viwe",
           description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
           price: "$ 570.00"
        },
        {
          id:5,
          image:"./images/houseSlice/house5.jpg",
          name: "Orchard House",
          description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
          price: "$ 570.00"
        },
        {
         id:6,
         image:"./images/houseSlice/house6.jpg",
         name: "School House",
         description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
         price: "$ 570.00"
        }

    ])
  return (
    <div className='HouseSlice'>
  <h2>Best Property Deals</h2>
  <div className="container">
    {
      houseSlice.map(house => {
        return (
          <div className="HouseSlice__slice" key={house.id}>
            <img src={house.image} alt={house.name} />
            <div className="HouseSlice__text">
              <h3>{house.name}</h3>
              <p>{house.description}</p>
            </div>
            <div className="HouseSlice__price">
              <p>{house.price}</p>
            </div>
          </div>
        );
      })
    }
  </div>
  <div className="HouseSlice__button">
  <button>View All Property</button>
  </div>
</div>
  )
}
