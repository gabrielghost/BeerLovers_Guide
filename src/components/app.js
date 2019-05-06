import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class App extends Component {
  componentDidMount(){
    this.props.beerIndex();
  }
  render() {
    let beerIndex = this.props.beers
    if (beerIndex.beer){
      let beerIndexArray = beerIndex.data
      return (
        <div>
        {beerIndexArray.map((item, i) => (
          <div>
          <h1>{i+1}</h1>
            <p>Name: {item.name}</p>
          </div>
        ))}
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    beers: state.state
  };
}

export default connect(mapStateToProps, actions)(App);
