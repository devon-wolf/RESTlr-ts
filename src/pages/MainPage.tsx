import React from 'react';
import { useState, FormEvent } from 'react';
import SearchBox from '../components/controls/SearchBox';
import Results from '../components/displays/Results';
import useRadio from '../hooks/useRadio';
import { getRequest } from '../services/fetch-utils';
import './MainPage.css';

const MainPage = () => {
    const [results, setResults] = useState<unknown>(null);
    const [address, setAddress] = useState('');
    const { method, handleRadioChange } = useRadio();

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        let response = await getRequest(address);
        console.log(response);
        setResults(response || null);
        setAddress('');
    };

    return (
        <main className="MainPage">
           <SearchBox
                method={method}
                handleRadioChange={handleRadioChange}
                address={address}
                setAddress={setAddress}
                handleFormSubmit={handleFormSubmit}
            />

           <Results results={results}/> 
        </main>
    )
};

export default MainPage;
