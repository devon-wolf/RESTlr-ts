import React from 'react';
import './Results.css';

type ResultsProps = { results: unknown[] };

const Results = ({ results }: ResultsProps) => {
    console.log(results);
    return (
        <div className="Results">
            {results.length > 0 &&
                results.map(result => <h4>GOT ONE</h4>)}
        </div>
    )
};

export default Results;
