import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../actions/index';

class beerView extends Component {
  componentDidMount(){
  }
  render() {
    if (this.props.beers.beer) {
      let beerArray = this.props.beers.beer
      let beerIdWithSlash = this.props.location.pathname
      let beerId = beerIdWithSlash.replace(/\//g,'');
      return beerArray.map((item, i) => {
        if (item.id === beerId) {
          return (
            <div key={i}>
              <h1>{item.name}</h1>
              <h1>ABV: {item.abv? item.abv : '-'}</h1>
              <h1>IBU: {item.ibu? item.ibu : '-'}</h1>
              <h1>GlasswareID {item.glasswareId}</h1>
              <p>{item.style.description}</p>
            </div>
          );
        }
      })
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    beers: state.state
  };
}

export default connect(mapStateToProps, actions)(beerView);
