import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.portfolio.map((stock,index) => {
          return <Stock stock={stock} key={`${stock.name} - ${index}`} handleClick={this.props.removeStock}/>
        })
        //render your portfolio stocks here
        }
      </div>
    );
  }

}

export default PortfolioContainer;
// key={`${stock.name} - ${index}`}