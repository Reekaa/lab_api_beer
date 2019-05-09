import React, {Component} from 'react';
import BeerSelect from '../components/BeerSelect.js';
import Header from '../components/Header.js';
import '../components/BeerSelect.css';
import DisplayBeer from '../components/DisplayBeer.js'
import DropdownFoodSelect from '../components/DropdownFoodSelect.js'
import DisplayFood from '../components/DisplayFood.js'
import SearchField from "react-search-field";


class  BeerContainer extends Component {

  constructor(props){
    super(props)
      this.state = {
        beerData: [],
        selectedBeer: null,
        selectedFood: null
      }
    this.handleSelectedBeer = this.handleSelectedBeer.bind(this)
    this.createBeerCard = this.createBeerCard.bind(this)
    this.handleSelectedFood = this.handleSelectedFood.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => {
        this.setState({beerData: data})
      })
  }

  handleSelectedBeer(index) {
    this.setState({selectedBeer: this.state.beerData[index]});
  }

  handleSelectedFood(index) {
    this.setState({selectedFood: this.state.beerData[index]});
  }

  createBeerCard(){
    if (this.state.selectedBeer) {
      return <DisplayBeer beer={this.state.selectedBeer} />
    }
  }

  createFoodCard(){
    if (this.state.selectedFood) {
      return <DisplayFood beer={this.state.selectedFood} />
    }
  }

  onSearchChange(text) {
    // var index;
    // for (index = 0; index < this.state.beerData.length; index++) {
    //   if (this.state.beerData[index].name.includes(text)) {
    //     this.setState({selectedBeerIndex: index});
    //     return;
    //   }
    // }
    // this.setState({selectedBeerIndex: null});

    if (text) {
      fetch('https://api.punkapi.com/v2/beers?beer_name=' + text)
        .then(res => res.json())
        .then(data => {
          this.setState({beerData: data})
        })
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
          <SearchField
            placeholder="Search..."
            onChange={this.onSearchChange}
            classNames="test-class"
          />
          {this.createBeerCard()}
          {this.createFoodCard()}
        </>
      )
    }

}

export default BeerContainer;
