import React from 'react';
import './SearchBox.css';
import RadioGroup from './RadioGroup';

const SearchBox = () => {

    return (
        <div className="SearchBox">
            <form>
                <RadioGroup
                    radioGroup="methods"
                    radioNames={[
                        'GET',
                        'POST',
                        'PUT',
                        'PATCH',
                        'DELETE'
                    ]}
                />
            </form>
        </div>
    )
};

export default SearchBox;
