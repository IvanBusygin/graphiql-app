import { toast } from 'react-toastify';

const getData = async (queryInput: string, variablesInput: string, headersInput: string) => {
  const timeStart = Date.now();
  let headers;
  let variables;

  try {
    variablesInput.trim() !== '' ? (variables = JSON.parse(variablesInput)) : '';
  } catch (error) {
    if (error instanceof SyntaxError) {
      toast.error('Variables are invalid JSON');
      return {
        output: `Variables are invalid JSON: ${error.message}`,
        time: 0,
        isLoading: false,
      };
    }
  }

  try {
    headers = JSON.parse(headersInput);
  } catch (error) {
    if (error instanceof SyntaxError) {
      toast.error('Headers are invalid JSON');
      return {
        output: `Headers are invalid JSON: ${error.message}`,
        time: 0,
        isLoading: false,
      };
    }
  }

  return await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: queryInput,
      variables: variables,
    }),
  })
    .then(async (res) => {
      return {
        result: await res.json(),
        status: res.status,
      };
    })
    .then((res) => {
      const result = {
        output: JSON.stringify(res.result, null, 2),
        time: Date.now() - timeStart,
        isLoading: false,
        status: res.status,
      };
      return result;
    });
};

export default getData;
