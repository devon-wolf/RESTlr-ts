import { ChangeEvent, useState } from 'react';

const useRadio = () => {
    const [selectedRadio, setSelectedRadio] = useState('');

    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value);
    }

    return { selectedRadio, handleRadioChange };
};

export default useRadio;
