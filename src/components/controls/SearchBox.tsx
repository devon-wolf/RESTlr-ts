import React, { ChangeEvent, ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';

type SearchBoxProps = {
    method: string;
    handleRadioChange: ChangeEventHandler;
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    handleFormSubmit: FormEventHandler;
}

const SearchBox = ({ 
    method, 
    handleRadioChange, 
    address, 
    setAddress, 
    handleFormSubmit 
}: SearchBoxProps) => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

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

                <input value={address} onInput={handleInput}/>
                <button>CLICK</button>
            </form>
        </div>
    )
};

export default SearchBox;
