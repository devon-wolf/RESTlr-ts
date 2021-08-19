import React from 'react';
import RadioButton from './RadioButton';
import useRadio from '../../hooks/useRadio';

type RadioGroupProps = {
    radioGroup: string;
    radioNames: string[];
};

const RadioGroup = ({ radioGroup, radioNames }: RadioGroupProps) => {
    const { selectedRadio, handleRadioChange } = useRadio();

    return (
        <div className="RadioGroup">
            {radioNames.map(name => 
                <RadioButton
                    labelText={name}
                    radioGroup={radioGroup}
                    radioValue={name}
                    handleRadioChange={handleRadioChange}
                    selectedRadio={selectedRadio}
                    key={radioGroup + name}
                />
                )}
        </div>
    )
};

export default RadioGroup;
