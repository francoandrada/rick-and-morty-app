import swal from 'sweetalert';

export const GET_CHARS = 'GET_CHARS';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

 export function getChars(char) {
    return function (dispatch) {
        return fetch("https://rickandmortyapi.com/api/character/?name=" + char)
            .then(response => response.json())
            .then(json => {
                if (json.error === "There is nothing here") {
                    swal("No se encontró el personaje")
                }else {
                    dispatch({ type: GET_CHARS, payload: json });
                }
            });
    }
}

export function addFavorites(char) {
    return {
        type: ADD_FAVORITES,
        payload: char
    }
}

export function removeFavorites(id) {
    return {
        type: REMOVE_FAVORITES,
        payload: id
    }
}