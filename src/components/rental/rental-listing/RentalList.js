import React from 'react';
import {RentalCard} from './RentalCard';

export class RentalList extends React.Component {

  renderRentals() {
  
    return this.props.rentals.map((rental, index) => {
      return <RentalCard colClass="col-md-3 col-xs-6" key={index} rental={rental}> </RentalCard>;
    });
  
}

  render() {
    return (
        <div className="row">
          {this.renderRentals()}
        </div>
      )
  }
}

