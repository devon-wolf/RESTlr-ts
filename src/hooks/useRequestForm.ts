import { FormEvent, ChangeEvent, useState } from 'react';
import { getRequest } from '../services/fetch-utils';

const useRequestForm = (method: string) => {
    const [results, setResults] = useState<unknown>(null);
    const [address, setAddress] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(method);
        let response = await getRequest(address);
        setResults(response || null);
        setAddress('');
    };

    return { results, address, handleInput, handleFormSubmit };

};

export default useRequestForm;