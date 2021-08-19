import React, { FormEvent } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';
import useRadio from '../../hooks/useRadio';

const SearchBox = () => {
    const { selectedRadio, handleRadioChange } = useRadio();
    
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(selectedRadio);
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleFormSubmit}>
                <RadioGroup
                    radioGroup="methods"
                    radioNames={[
                        'GET',
                        'POST',
                        'PUT',
                        'PATCH',
                        'DELETE'
                    ]}
                    handleRadioChange={handleRadioChange}
                    selectedRadio={selectedRadio}
                />
                <button>CLICK</button>
            </form>
        </div>
    )
};

export default SearchBox;
