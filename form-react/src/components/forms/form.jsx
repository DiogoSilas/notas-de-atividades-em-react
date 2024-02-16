import { React, useState } from "react";
import './form.css'

const Form = (props) => {
    const [inputs, setInput] = useState({
        image: ''
    })

    const handleInputChange = (event) => {
        setInput({
            image: event.target.value
        })
    }

    const handlSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
            <form onSubmit={handlSubmit}>
                <div>
                    <label htmlFor="image">Endereço da imagem da carta</label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default Form;