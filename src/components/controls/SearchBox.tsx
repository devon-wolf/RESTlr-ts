import React, { ChangeEvent, Dispatch, FormEventHandler, SetStateAction } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';
import useRadio from '../../hooks/useRadio';
import useRequestForm from '../../hooks/useRequestForm';

type SearchBoxProps = {
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    handleFormSubmit: FormEventHandler;
}

const SearchBox = ({ address, setAddress, handleFormSubmit }: SearchBoxProps) => {
    const { selectedRadio, handleRadioChange } = useRadio();

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
