function addHistory(queryInput: string, variablesInput: string, headersInput: string) {
  const localHistory = localStorage.getItem('history');
  const qArr = localHistory ? JSON.parse(localHistory) || [] : [];
  const newHistory = [
    ...qArr,
    { query: queryInput, variables: variablesInput, headers: headersInput },
  ];
  localStorage.history = JSON.stringify(newHistory);
}

export default addHistory;
