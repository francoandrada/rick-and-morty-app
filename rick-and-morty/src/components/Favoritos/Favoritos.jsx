import React from "react"
import { connect } from 'react-redux'
import { removeFavorites } from '../../redux/actions'
import styles from './Favoritos.module.css'

function Favoritos(props) {
    return (
        <div class={styles.divfav}>
            <h3 id= {styles.title}> Tus Personajes Favoritos</h3>
            {
                props.chars.map(char => (
                    <div class={styles.card} >

                        <img class={styles.cardImage} src={char.image} alt={char.name} />

                        
                        <div className={styles.textContainer} >
                            <p>Gender:{char.gender} </p>
                            <p>Name:{char.name} </p>
                            <p>Species:{char.species} </p>

                        </div>
                        <div id={styles.removeButton}>
                            <button id= {styles.btn} onClick={() => props.removeFavorite({ id: char.id })}> x </button>
                        </div>
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