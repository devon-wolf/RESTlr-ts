import React, { ChangeEventHandler } from 'react';

type RadioProps = {
    labelText: string;
    radioGroup: string;
    radioValue: string;
    handleRadioChange: ChangeEventHandler;
    selectedRadio: string;
}

const RadioButton = ({ labelText, radioGroup, radioValue, handleRadioChange, selectedRadio }: RadioProps) => {
    return (
        <label className="radioLabel">
            <span>{labelText}</span>
            <input
                type="radio" 
                name={radioGroup} 
                value={radioValue}
                onChange={handleRadioChange} 
                checked={selectedRadio === radioValue} />
        </label>
    )
};

export default RadioButton;
