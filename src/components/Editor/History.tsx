import { useEffect, useState } from 'react';
import useStore, { ZState } from '../../store';

interface HistoryItem {
  query: string;
  headers: string;
  variables: string;
}

function History() {
  const { setVariablesInput, setHeadersInput, setQueryInput } = useStore((state: ZState) => state);
  const [historyItems, setHistoryItems] = useState([]);
  const getHistory = localStorage.getItem('history');

  useEffect(() => {
    if (getHistory) {
      setHistoryItems(JSON.parse(getHistory));
    }
  }, [getHistory]);

  function handleClick(item: HistoryItem) {
    setVariablesInput(item.variables);
    setHeadersInput(item.headers);
    setQueryInput(item.query);
  }

  function clearHistory() {
    localStorage.removeItem('history');
    setHistoryItems([]);
  }

  return (
    <section className="scrollbar relative row-span-2 border-l-[1px] border-grayLight bg-grayDark p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">History</h1>
          {historyItems.length > 0 && (
            <button
              onClick={clearHistory}
              className="hover:text-red-500"
            >
              clear
            </button>
          )}
        </div>
        <ul className="absolute w-full">
          {historyItems &&
            historyItems.map((item: HistoryItem, index) => (
              <li
                key={index}
                onClick={() => handleClick(item)}
                className="mb-4 cursor-pointer bg-grayLight p-2"
                title={item.query}
              >
                {index + 1 + '. '}
                <span className="pl-2">{item.query.split('{')[0].split('(')[0]}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default History;
