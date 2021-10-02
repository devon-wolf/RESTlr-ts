import React from 'react';
import './Results.css';

type ResultsProps = { results: unknown };

const Results = ({ results }: ResultsProps) => {

    return (
        <div className="Results">
            {results
                ?   <div className="resultsBody">
                        <pre>{JSON.stringify(results, null, 2)}</pre>
                    </div>
                : <p>Enter URL above.</p>    
            }
                
        </div>
    )
};

export default Results;
