import { GET_CHARS, ADD_FAVORITES, REMOVE_FAVORITES } from './actions';

const initialState = {
    charsLoaded: [],
    charsFavorites: [],
    details: {}
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CHARS:
            return {
                ...state,
                charsLoaded: action.payload.results
            }
        case ADD_FAVORITES:
            return {
                ...state,
                charsFavorites: state.charsFavorites.filter(c => c.id !== action.payload.id).concat(action.payload)
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                charsFavorites: state.charsFavorites.filter(c => c.id !== action.payload.id)
            }
        default:
            return state;
    }
}