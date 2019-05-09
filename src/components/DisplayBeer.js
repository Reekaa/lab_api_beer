import React from "react";

const DisplayBeer = (props) => {


  return (
    <>
      <h1>Selected beer</h1>
      <h2>Beer: {props.beer.name}</h2>
      <h2>Food Pairing: <br/>
        {props.beer.food_pairing[0]}
          <br></br>
        {props.beer.food_pairing[1]}
          <br></br>
        {props.beer.food_pairing[2]}
      </h2>
      <img src={props.beer.image_url} alt="beer-image" heigh="180" width="100" />
    </>
  )
}

export default DisplayBeer;
