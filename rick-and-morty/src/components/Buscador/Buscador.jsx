import React, { useState } from "react"
import { connect } from 'react-redux'
import { getChars, addFavorites } from '../../redux/actions'
import swal from 'sweetalert'
import styles from './Buscador.module.css'
import { Link } from "react-router-dom"

import Card from '../Card/Card'


function Buscador(props) {

    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.length === 0) {
            swal("Tenes que ingresar un nombre")
        } else {
            props.getChars(input);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_form}>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <input className={styles.input} type="text" placeholder="Busca un personaje.." value={input} onChange={(e) => handleChange(e)} />
                    <button id={styles.search} type='submit'>Buscar</button>
                </form>
            </div>

            <div className={styles.container_card}>
                {
                    props.chars.length > 0 ? props.chars.map(char => (
                        <div key={char.id}>
                            <Card
                                id={char.id}
                                gender={char.gender}
                                name={char.name}
                                species={char.species}
                                image={char.image}
                            />
                        </div>
                    )) : <div>ACA VA EL PORTAL</div>
                }
            </div>

        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        chars: state.charsLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getChars: char => dispatch(getChars(char)),
        addFavorite: char => dispatch(addFavorites(char))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);