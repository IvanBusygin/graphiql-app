import { toast } from 'react-toastify';

const getData = async (headersInput: string, query: string) => {
  const timeStart = Date.now();
  let headers = {};
  try {
    headers = JSON.parse(headersInput);
  } catch (error) {
    if (error instanceof SyntaxError) {
      toast.error(error.name);
      return {
        output: JSON.stringify({ error: { type: error.name, message: error.message } }, null, 4),
        time: 0,
        isLoading: false,
      };
    }
  }
  return await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const result = {
        output: JSON.stringify(res, null, 2),
        time: Date.now() - timeStart,
        isLoading: false,
      };
      return result;
    });
};

export default getData;
