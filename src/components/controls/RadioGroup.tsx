import React, { ChangeEventHandler } from 'react';
import RadioButton from './RadioButton';

type RadioGroupProps = {
  radioGroup: string;
  radioNames: string[];
  handleRadioChange: ChangeEventHandler;
  selectedRadio: string;
};

const RadioGroup = ({
  radioGroup,
  radioNames,
  handleRadioChange,
  selectedRadio,
}: RadioGroupProps): JSX.Element => {
  return (
    <div className="RadioGroup">
      {radioNames.map((name) => (
        <RadioButton
          labelText={name}
          radioGroup={radioGroup}
          radioValue={name}
          handleRadioChange={handleRadioChange}
          selectedRadio={selectedRadio}
          key={radioGroup + name}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
