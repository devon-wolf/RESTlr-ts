import React, { ChangeEventHandler } from 'react';

type RadioProps = {
  labelText: string;
  radioGroup: string;
  radioValue: string;
  handleRadioChange: ChangeEventHandler;
  selectedRadio: string;
};

const RadioButton = ({
  labelText,
  radioGroup,
  radioValue,
  handleRadioChange,
  selectedRadio,
}: RadioProps) => {
  return (
    <label className="radioLabel">
      <input
        type="radio"
        name={radioGroup}
        value={radioValue}
        onChange={handleRadioChange}
        checked={selectedRadio === radioValue}
      />
      <span>{labelText}</span>
    </label>
  );
};

export default RadioButton;
