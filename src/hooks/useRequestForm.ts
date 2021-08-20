import { FormEvent, useState } from 'react';

const useRequestForm = () => {
    const [address, setAddress] = useState('');

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        // do stuff
        console.log(address);
        setAddress('');
    };

    return { address, setAddress, handleFormSubmit };
};

export default useRequestForm;