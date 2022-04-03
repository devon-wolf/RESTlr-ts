import { ChangeEvent, useState } from 'react';

const useRadio = (): {
  method: string;
  handleRadioChange: (e: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [method, setMethod] = useState('GET');

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value);
  };

  return { method, handleRadioChange };
};

export default useRadio;
