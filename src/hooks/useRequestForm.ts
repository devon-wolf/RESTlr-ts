import { FormEvent, useState } from 'react';
import { getRequest } from '../services/fetch-utils';
import useReqResults from './useReqResults';

const useRequestForm = () => {
    const [address, setAddress] = useState('');
    const { setResults } = useReqResults();

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await getRequest(address);
        setResults(response);
        setAddress('');
    };

    return { address, setAddress, handleFormSubmit };
};

export default useRequestForm;