export const uploadService = async (data) => {
  const createRequest = () => {
      return {
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': '' // application/json
          },
          body: {
              file: data
          }
      }
  }
  const ENDPOINT = '/api/wordcount/v1/upload';
  const response = await fetch(ENDPOINT, createRequest());
  const body = await response.json();

  // if (response.status !== 200) throw Error(body.message);

  return body;
};