import React, { useState } from "react";
import "./ResidencesSlices.scss";

export default function ResidencesSlices() {
  const [residencesSlice, setResidencesSlice] = useState([
    {
      id: 1,
      image: "./images/residences/apt1.jpg",
      name: "Meadow viwe",
      description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
      price: "$ 570.00",
    },
    {
      id: 2,
      image: "./images/residences/apt2.jpg",
      name: "Orchard House",
      description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
      price: "$ 570.00",
    },
    {
      id: 3,
      image: "./images/residences/apt3.jpg",
      name: "School House",
      description: " 3 Bads |  3 Baths  |  2,532 Sq.Ft",
      price: "$ 570.00",
    },
  ]);

  return (
    <div className="ResidencesSlices">
      <h2>Explore the popular residences</h2>
      <div className="container">
        {residencesSlice.map((elem) => {
          return (
            <div className="ResidencesSlices__div">
              <img src={elem.image} />
              <div className="ResidencesSlices__description">
                <h3>{elem.name}</h3>
                <p>
                  <span className="price">{elem.price}</span>
                  <span>
                    <b> | New </b>
                  </span>
                </p>
                <p>
                  <span>{elem.description}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
