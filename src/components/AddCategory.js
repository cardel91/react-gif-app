import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {



    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // validacion de inputvalue
        if(inputValue.trim().length >2){
            // llamar con el callback del estado anterior
            setCategories(c=>[inputValue, ...c ]);
            setInputValue('');
        }
        // this.props.setCategories(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
