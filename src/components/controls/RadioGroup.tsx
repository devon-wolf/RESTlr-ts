import React, { ChangeEvent, useState } from 'react';
import RadioButton from './RadioButton';

type RadioGroupProps = {
    radioGroup: string;
    radioNames: string[];
};

const RadioGroup = ({ radioGroup, radioNames }: RadioGroupProps) => {
    const [selectedRadio, setSelectedRadio] = useState('');

    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value);
    }

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
