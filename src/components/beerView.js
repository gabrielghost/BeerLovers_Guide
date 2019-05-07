import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../actions/index';

class beerView extends Component {
  componentDidMount(){
      this.props.beerIndex();
  }
  render() {
    if (this.props.beers.beer) {
      let beerArray = this.props.beers.beer
      let beerIdWithSlash = this.props.location.pathname
      let beerId = beerIdWithSlash.replace(/\/beer\//g,'');
      return beerArray.map((item, i) => {
        if (item.id === beerId) {
          let organicMarker;
          if (item.isOrganic === 'N'){
            organicMarker = ''
          } else if (item.isOrganic === 'Y'){
            organicMarker = 'Organic'
          }

          // This section of code checks for a description in the places it can normally be found - though is quite verbose - open for suggestions to make it cleaner!

          let beerDescription;
          if ('style' in item) {
            if ('description' in item.style) {
              beerDescription = item.style.description
            }
            } else if ('description' in item) {
              beerDescription = item.description
          } else {
            beerDescription = 'This beer has no description, doesn\'t mean it isn\'t tasty as hell though!'
          }


          return (
            <div className='beerView' key={i}>
              <h1>{item.name? `${item.name}` : 'Oops this beer has no name'}</h1>
              <h1>{item.abv? `ABV: ${item.abv}` : ''}</h1>
              <h1>{item.ibu? `IBU: ${item.ibu}` : ''}</h1>
              <h1>{item.glasswareId? `Glassware: ${item.glasswareId}` : ''}</h1>
              <h1>{organicMarker}</h1>
              <p>{beerDescription}</p>
              <Link to={{pathname: `/`}} style={{color: 'black'}} >Back</Link>
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
