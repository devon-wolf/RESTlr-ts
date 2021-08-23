import React from 'react';
import './Results.css';

type ResultsProps = { results: unknown };

const Results = ({ results }: ResultsProps) => {
    // const prettifyJSON = () => {
    //     if (Array.isArray(results)) {
    //         if (results.length) {
    //             const strings = ['['];
    //             for (const result of results) {
    //                 const resultString = JSON.stringify(result);
    //                 resultString.split('{');

    //             }
    //             return strings.join('\n');
    //         }
    //         else return JSON.stringify(results);
    //     }
    //     else {
    //         // assume it's a JSON object or a string
    //     }
    // };

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
