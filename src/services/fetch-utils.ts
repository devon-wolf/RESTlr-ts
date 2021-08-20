export const getRequest = (address: string, token?: string): Promise<unknown> => {
    return fetch(address)
        .then(response => response.json())
        .catch(console.error);
};