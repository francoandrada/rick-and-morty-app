import React, { useState } from "react"
import { connect } from 'react-redux'
import { getChars } from '../../redux/actions'
import swal from 'sweetalert'

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
        <div>
            <h2>Buscador</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Personaje: </label>
                <input
                    type="text"

                    value={input}
                    onChange={(e) => handleChange(e)}
                />

                <button type='submit'>Buscar</button>
            </form>

            <div>
                {
                    props.chars && props.chars.map(char => (
                        <div key={char.id}>
                            <Card
                                id={char.id}
                                gender={char.gender}
                                name={char.name}
                                species={char.species}
                                image={char.image}
                            />
                        </div>
                    ))
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
        getChars: char => dispatch(getChars(char))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);