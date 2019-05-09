import React from "react";

const DisplayFood = ({beer}) => {


  return (
    <>
      <h1>Selected beer</h1>
      <h2>Beer: {beer.name}</h2>
      <img src={beer.image_url} alt="beer-image" heigh="180" width="100" />
    </>
  )
}

export default DisplayFood;
