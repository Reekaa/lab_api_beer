import React, {Component} from 'react';
import './BeerSelect.css';

class BeerSelect extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedBeerIndex: 0
    }
    this.handleSelectedBeerChange = this.handleSelectedBeerChange.bind(this)
  }

  handleSelectedBeerChange(evt) {
    this.setState({selectedBeerIndex: evt.target.value});
    this.props.handleSelectedBeer(evt.target.value);
  }

  createDropdown() {
    return this.props.beerData.map((beer, index) => {
      return <option className="ui dropdown" value={index} key={index}>{beer.name}</option>
    });
  }

  render() {
    return (
      <select value={this.state.selectedBeerIndex} onChange={this.handleSelectedBeerChange}>
        {this.createDropdown()}
      </select>
    )
  }

}

export default BeerSelect;
