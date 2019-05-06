import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../actions/index';

class beerView extends Component {
  componentDidMount(){
    this.props.beerIndex();
  }
  render() {
    let beerIndex = this.props.beers
    if (beerIndex.beer){
      let beerIndexArray = beerIndex.beer
      return (
        <div>
        {beerIndexArray.map((item, i) => (
          <div key={i}>
          <Link to={{pathname: `/${item.id}`}} style={{color: 'black'}} >
          <div className='beerLi'>
          <p>{item.name} ABV: {item.abv}  IBU: {item.ibu}</p>
          </div>
          </Link>
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

export default connect(mapStateToProps, actions)(beerView);
