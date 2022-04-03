import React, { FormEventHandler } from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';

type SearchBoxProps = {
  method: string;
  handleRadioChange: FormEventHandler;
  address: string;
  handleInput: FormEventHandler;
  handleFormSubmit: FormEventHandler;
};

const SearchBox = ({
  method,
  handleRadioChange,
  address,
  handleInput,
  handleFormSubmit,
}: SearchBoxProps) => {
  return (
    <div className="SearchBox">
      <form onSubmit={handleFormSubmit}>
        <RadioGroup
          radioGroup="methods"
          radioNames={['GET', 'POST', 'PUT', 'PATCH', 'DELETE']}
          handleRadioChange={handleRadioChange}
          selectedRadio={method}
        />
        <div className="addressBar">
          <input value={address} onInput={handleInput} />

          <button>CLICK</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
