import React, {Component} from 'react';
import BeerSelect from '../components/BeerSelect.js';
import Header from '../components/Header.js';
import '../components/BeerSelect.css';
import DisplayBeer from '../components/DisplayBeer.js'
import DropdownFoodSelect from '../components/DropdownFoodSelect.js'
import DisplayFood from '../components/DisplayFood.js'

class  BeerContainer extends Component {

  constructor(props){
    super(props)
      this.state = {
        beerData: [],
        selectedBeerIndex: null,
        selectedFoodIndex: null
      }
    this.handleSelectedBeer = this.handleSelectedBeer.bind(this)
    this.createBeerCard = this.createBeerCard.bind(this)
    this.handleSelectedFood = this.handleSelectedFood.bind(this)
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => {
        this.setState({beerData: data})
      })
  }

  handleSelectedBeer(index) {
    this.setState({selectedBeerIndex: index});
  }

  handleSelectedFood(index) {
    this.setState({selectedFoodIndex: index});
  }

  createBeerCard(){
    if (this.state.selectedBeerIndex) {
      return <DisplayBeer beer={this.state.beerData[this.state.selectedBeerIndex]} />
    }
  }

  createFoodCard(){
    if (this.state.selectedFoodIndex) {
      return <DisplayFood beer={this.state.beerData[this.state.selectedFoodIndex]} />
    }
  }

  render() {
      return (
        <>
          <Header />
          <BeerSelect
            beerData={this.state.beerData}
            handleSelectedBeer={this.handleSelectedBeer}
          />
          <DropdownFoodSelect
            beerData={this.state.beerData}
            handleSelectedFood={this.handleSelectedFood}
          />
          {this.createBeerCard()}
          {this.createFoodCard()}
        </>
      )
    }

}

export default BeerContainer;
