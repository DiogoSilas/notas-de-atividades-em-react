import React from 'react';

const theLabels = (e, label) => {
    console.log('A label deste botão é', label)
}

const Button = (props) => {
    return (
        <button onClick={(e) => theLabels(e, props.label)}>{props.label}</button>
    );
};

export default Button;