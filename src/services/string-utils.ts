export const makeJSONPretty = (jsonString: string): string[] => {
    const everyLine: string[] = [];
    const splitOnEndCommas = jsonString.split('",');
    const splitOnEndCurly = [];
    const splitOnFirstCurly = []
    
    console.log('FIRST SPLIT', splitOnEndCommas);

    for (const section of splitOnEndCommas) {
        // TODO account for end of array section
        if (section.endsWith(']')) splitOnEndCurly.push(section);
        const restoreQuotes = section + '",';
        splitOnEndCurly.push(...restoreQuotes.split('}'));
    }

    for (const section of splitOnEndCurly) {
        if (section.endsWith(']')) splitOnFirstCurly.push(section);
        else splitOnFirstCurly.push(...section.split('{'), '}');
    }

    everyLine.push(...splitOnFirstCurly);

    console.log(everyLine);
    return everyLine;
};
