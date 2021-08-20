import { useState } from "react";

const useReqResults = () => {
    const [results, setResults] = useState<unknown[]>([]);
    return { results, setResults };
}

export default useReqResults;