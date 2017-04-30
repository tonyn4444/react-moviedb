import { FETCH_DATA } from '../actions';

export default function(state = null, action) {
	switch(action.type) {
		case FETCH_DATA:
			console.log(action.payload.data)
			return action.payload.data.results[0]
	}
	return state;
}