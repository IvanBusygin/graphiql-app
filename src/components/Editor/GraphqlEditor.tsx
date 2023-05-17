import { useState } from 'react';
import Editor from './Editor';
import EditorBtns from './EditorBtns';
import EditorTools from './EditorTools';
import Results from './Results';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';
import AsideMenu from './AsideMenu';

const url = 'https://rickandmortyapi.com/graphql';
const testQuery = `
query
  {
    characters(page:1,filter:{name:"summer"}){
      info{count}
      results{name}
    }
  }`;

function GraphqlEditor(): React.ReactElement {
  const [inputValue, setInputValue] = useState(testQuery);
  const [result, setResult] = useState('');
  const [fetchTime, setFetchTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const clickBtn = (btn: string) => {
    if (btn === 'Exec') {
      getData(inputValue);
    }
    console.log('clicked: ', btn);
  };

  async function getData(query: string) {
    console.log('inputValue :>> ', inputValue);
    setIsLoading(true);
    const timeStart = Date.now();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const timeEnd = Date.now();
        setFetchTime(timeEnd - timeStart);
        setResult(JSON.stringify(result));
        setIsLoading(false);
      });
  }

  return (
    <>
      <AsideMenu />
      <section className="m-4 ml-0 grid w-full grow grid-cols-[minmax(255px,1fr)_minmax(0,1fr)] rounded-[20px] bg-[#313949] xs:grow-0">
        <div className="left m-2 grid grid-rows-[1fr_auto] rounded-[12px] bg-[#212A3B]">
          <div className="leftTop grid grid-cols-[1fr_40px] p-4">
            <Editor
              text={testQuery}
              func={setInputValue}
            />
            <EditorBtns func={clickBtn} />
          </div>
          <EditorTools />
        </div>
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Refresh className="h-10 w-10 animate-spin stroke-white" />
          </div>
        ) : (
          <Results
            result={result}
            fetchTime={fetchTime}
          />
        )}
      </section>
    </>
  );
}

export default GraphqlEditor;
