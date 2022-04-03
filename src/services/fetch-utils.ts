export const getRequest = async (
  address: string,
  token?: string
): Promise<JSON | void> => {
  try {
    const response = await fetch(address);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
// adapted from my own code here: https://github.com/devon-wolf/RESTlr/blob/main/src/services/api-utils.js
export const makeRequest = async (
  method: string,
  address: string,
  body?: string,
  token = ''
): Promise<JSON | void> => {
  try {
    let response;
    if (method === 'GET') {
      response = await fetch(address);
    } else {
      response = await fetch(address, {
        method,
        body: body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
