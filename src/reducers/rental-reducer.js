
const INITIAL_STATE = {
	rentals: {
		data: []
	},
	selectedRental: {}
}

export const rentalsReducer = (state = INITIAL_STATE.rentals, action) => {
  switch(action.type){
    case 'FETCH_RENTALS':
      debugger;
      return Object.assign({}, state, {data: action.rentals});
      // return {...state, data: action.rentals};
    default:
      return state;
  }
}


export const selectedRentalReducer = (state = INITIAL_STATE.selectedRental, action) => {
  switch(action.type){
    case 'FETCH_RENTAL_BY_ID_SUCCESS':
      return Object.assign({}, state, {data: action.rental});
      // return {...state, data: action.rentals};
    case 'FETCH_RENTAL_BY_ID_INIT':
      return {...state, data: {}}
    default:
      return state;
  }
}

