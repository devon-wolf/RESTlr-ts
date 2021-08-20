import React, { FormEventHandler } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';

type SearchBoxProps = {
    method: string;
    handleRadioChange: FormEventHandler;
    address: string;
    handleInput: FormEventHandler;
    handleFormSubmit: FormEventHandler;
}

const SearchBox = ({ 
    method, 
    handleRadioChange, 
    address, 
    handleInput, 
    handleFormSubmit 
}: SearchBoxProps) => {


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
                    selectedRadio={method}
                />

                <input
                    value={address}
                    onInput={handleInput}
                />

                <button>CLICK</button>
            </form>
        </div>
    )
};

export default SearchBox;
