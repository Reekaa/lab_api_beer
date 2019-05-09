import React from "react";

const DisplayBeer = ({beer}) => {


  return (
    <>
      <h1>Selected beer</h1>
      <h2>Beer: {beer.name}</h2>
      <h2>Food Pairing: <br/>
        {beer.food_pairing[0]}
          <br></br>
        {beer.food_pairing[1]}
          <br></br>
        {beer.food_pairing[2]}
      </h2>
      <img src={beer.image_url} alt="beer-image" heigh="180" width="100" />
    </>
  )
}

export default DisplayBeer;
