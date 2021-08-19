import React from 'react';
import SearchBox from '../components/controls/SearchBox';
import Results from '../components/displays/Results';
import './MainPage.css';

const MainPage = () => {
    return (
        <main className="MainPage">
           <SearchBox />
           <Results /> 
        </main>
    )
};

export default MainPage;
