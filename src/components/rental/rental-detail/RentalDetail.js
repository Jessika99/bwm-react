import React from 'react';
import { connect } from 'react-redux'

import * as actions from 'actions';

class RentalDetail extends React.Component {

	componentWillMount() {
		const rentalId = this.props.match.params.id;

		this.props.dispatch(actions.fetchRentalById(rentalId))
	}

	render() {
		const rental = this.props.rental;

		if (rental) {
			return (
				<div>
					<h1> I am Rental Detail Component {this.props.rental.title}</h1>
				</div>
				)
		} else {
			return (
				<div> Loading </div>
				)
		}
		
	}
}


function mapStateToProps(state) {
	debugger;
  return {
    rental: state.rental.data
  }
}

export default connect(mapStateToProps)(RentalDetail)