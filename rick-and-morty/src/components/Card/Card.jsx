import React from "react"
import styles from './Card.module.css'
import { connect } from 'react-redux'
import { addFavorites } from "../../redux/actions.js"

function Card(props) {

    return (
        <div class={styles.card}>
            <img class={styles.cardImage} src={props.image} />
            <div className={styles.textContainer}>
                <p>Nombre: {props.name}</p>
                <p>Género: {props.gender}</p>
                <p>Especie: {props.species}</p>
                <button id={styles.addButton}
                onClick={() => props.addFavorites({id:props.id, gender:props.gender, species:props.species, name:props.name, image:props.image})}>Agregar a favoritos</button>    
            </div>        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chars: state.charsLoaded,
        favoritos: state.charsFavorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavorites: char => dispatch(addFavorites(char))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);