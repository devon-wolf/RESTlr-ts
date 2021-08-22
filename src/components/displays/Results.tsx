import React from 'react';
import './Results.css';

type ResultsProps = { results: unknown };

const Results = ({ results }: ResultsProps) => {
    return (
        <div className="Results">
            {results
                ?   <div className="resultsBody">
                    {JSON.stringify(results)}
                    </div>
                : <p>Enter URL above.</p>    
            }
                
        </div>
    )
};

export default Results;
