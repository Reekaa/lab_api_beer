function FoodSelect()

{
let new_pairings =[];
for (var i = 0; i < beer_Api_Data.length; i++) {
  for (var j = 0; j < beer_Api_Data[i].food_pairing.length; j++) {
    new_pairings.push(beer_Api_Data[i].food_pairing[j]);

  }
}
return(new_pairings);
}
export default FoodSelect;
