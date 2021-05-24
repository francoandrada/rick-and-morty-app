import React from "react"
import { connect } from 'react-redux'
import { removeFavorites } from '../../redux/actions'
import styles from './Favoritos.module.css'

function Favoritos(props) {
    return (
        <div>

            {
                props.chars.map(char => (
                    <div>

                        <p>gender:{char.gender} </p>
                        <p>name:{char.name} </p>
                        <p>species:{char.species} </p>

                        <img src={char.image} alt={char.name} />
                        <button onClick={() =>
                            props.removeFavorite({
                                id:char.id
                            }

                            )
                        }> x </button>
                    </div>

                ))
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chars: state.charsFavorites
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        removeFavorite: char => dispatch(removeFavorites(char))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);