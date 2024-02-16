import { React, useState } from "react";
import './form.css'

const FormInputs = (props) => {
    const [inputs, setInput] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target
        // Poderia ser {name, value}. Mas com inputs de chack box, o target vai retornar um objeto diferente e eles não tem objeto "value".

        setInput({
            ...inputs,
            [name]: value
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
                <div>
                    <label htmlFor="value">Nome da carta:</label>
                    <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value} />
                </div>
                <div>
                    <label htmlFor="suit">Naipe da carta:</label>
                    <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit} />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default FormInputs;