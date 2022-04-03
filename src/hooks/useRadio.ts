import { ChangeEvent, useState } from 'react';

const useRadio = () => {
  const [method, setMethod] = useState('GET');

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value);
  };

  return { method, handleRadioChange };
};

export default useRadio;
