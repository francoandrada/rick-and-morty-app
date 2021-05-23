import React from "react"
import styles from './Card.module.css'
import { connect } from 'react-redux'
import { addFavorites } from "../../redux/actions.js"

function Card(props) {

    return (
        <div class={styles.card}>
            <span class={styles.cardName}> {props.name}</span>
            <img src={props.image} />
            
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