import React from 'react';
import SearchBox from '../components/controls/SearchBox';
import Results from '../components/displays/Results';
import useRadio from '../hooks/useRadio';
import useRequestForm from '../hooks/useRequestForm';

import './MainPage.css';

const MainPage = () => {
  const { method, handleRadioChange } = useRadio();
  const { results, address, handleInput, handleFormSubmit } =
    useRequestForm(method);

  return (
    <main className="MainPage">
      <SearchBox
        method={method}
        handleRadioChange={handleRadioChange}
        address={address}
        handleInput={handleInput}
        handleFormSubmit={handleFormSubmit}
      />

      <Results results={results} />
    </main>
  );
};

export default MainPage;
