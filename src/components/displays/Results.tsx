import React from 'react';
import './Results.css';

type ResultsProps = { results: unknown };

const Results = ({ results }: ResultsProps) => {
    return (
        <div className="Results">
            {results
                ?   <p>
                    {JSON.stringify(results)}
                    </p>
                : <p>Enter URL above.</p>    
            }
                
        </div>
    )
};

export default Results;
