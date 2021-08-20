import React, { ChangeEvent } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';
import useRadio from '../../hooks/useRadio';
import useRequestForm from '../../hooks/useRequestForm';

const SearchBox = () => {
    const { selectedRadio, handleRadioChange } = useRadio();
    const { address, setAddress, handleFormSubmit } = useRequestForm();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
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

                <input value={address} onInput={handleInput}/>
                <button>CLICK</button>
            </form>
        </div>
    )
};

export default SearchBox;
