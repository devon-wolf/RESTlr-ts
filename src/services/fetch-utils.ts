export const getRequest = async (address: string, token?: string): Promise<unknown[] | void> => {
    try {
        const response = await fetch(address);
        const json = await response.json();
        if (Array.isArray(json)) return json;
        else return [json]
    }
    catch (error) {
        console.log(error);
    }
};