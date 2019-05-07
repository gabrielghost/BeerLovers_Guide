import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../actions/index';
import InfiniteScroll from 'react-infinite-scroller';

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
          <Link to={{pathname: `beer/${item.id}`}} style={{color: 'black'}} >
          <div className='beerLi'>
          <div className='beerLiLeft'>
          <p>{item.name}</p>
          </div>
          <div className='beerLiRight'>
           <p>{item.abv? `ABV: ${item.abv}%` : `ABV: -`}</p>
           <p>{item.ibu? `IBU: ${item.ibu}` : `IBU: -`}</p>
          </div>
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
