import React, {Component} from 'react';
import BeerSelect from '../components/BeerSelect.js';

class  BeerContainer extends Component {

  constructor(props){
    super(props)
      this.state = {
        beerData: [],
        selectedBeerIndex: null
      }
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

  createBeerCard(){

  }

  render() {
      return (
        <>
          <h1>BrewDog Beers</h1>
          <BeerSelect
            beerData={this.state.beerData}
            handleSelectedBeer={this.handleSelectedBeer}
          />
          {this.createBeerCard()}
        </>
      )
    }

}

export default BeerContainer;
