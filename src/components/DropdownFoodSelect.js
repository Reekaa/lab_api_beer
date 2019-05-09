import React, {Component} from 'react';
import './BeerSelect.css';

class DropdownFoodSelect extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedBeerIndex: 0
    }
    this.handleSelectedFoodChange = this.handleSelectedFoodChange.bind(this)
  }

  handleSelectedFoodChange(evt) {
    this.setState({selecteBeerdIndex: evt.target.value});
    this.props.handleSelectedFood(evt.target.value);
  }

  createFoodDropdown() {
    return this.props.beerData.map((beer, index) => {
      return <option className="ui dropdown" value={index} key={index}>{beer.food_pairing[0]}</option>
    });
  }

  render() {
    return (
      <select value={this.state.selectedBeerIndex} onChange={this.handleSelectedFoodChange}>
        {this.createFoodDropdown()}
      </select>
    )
  }

}

export default DropdownFoodSelect;
