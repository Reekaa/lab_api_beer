import React, {Component} from 'react';

class BeerSelect extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedBeerIndex: 0
    }
  }

  handleSelectedBeerChange(evt) {
    this.setState({selecteBeerdIndex: evt.target.value});
    this.props.handleSelectedBeer(evt.target.value);
  }

  createDropdown() {
    return this.props.beerData.map((beer, index) => {
      return <option className="dropdown"value={index} key={index}>{beer.name}</option>
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
