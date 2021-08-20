import { FormEvent, useState } from 'react';
import { getRequest } from '../services/fetch-utils';

const useRequestForm = () => {
    const [address, setAddress] = useState('');

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await getRequest(address);
        console.log(response);
        setAddress('');
    };

    return { address, setAddress, handleFormSubmit };
};

export default useRequestForm;