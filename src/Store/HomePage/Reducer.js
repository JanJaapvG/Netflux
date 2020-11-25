import {STARWARS} from './Actions'

// predefine which slices of data you want to retrieve initially
const initialState = {
}

// switch case which defines what will be returned for each type
export default (state = initialState, {type, payload}) => {
    switch (type) {

    case STARWARS:
        return { ...state, ...payload }

    default:
        return state
    }
}
