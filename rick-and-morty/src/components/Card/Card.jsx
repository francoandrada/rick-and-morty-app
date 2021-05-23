import React from "react"
import styles from './Card.module.css'
import { connect } from 'react-redux'
import  { addFavorites } from "../../redux/actions.js"

    function Card(props){
     const {name, image} = props
        return(
            <div class= {styles.card}>
                <span class = { styles.cardName }> { name }</span>
                <img src= {`https://rickandmortyapi.com/api/character/avatar/${image}.jpeg`} />
                <button onClick={() => {
                this.props.addFavorite({ name: chars.name, image: chars.image })
              }}>
                FAV
               </button> {/*cambiar el button} */}
            </div>
        )
}

const mapStateToProps = state =>{
    return{
        chars: state.charsLoaded
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addFavorites: char => dispatch(addFavorites(char))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);