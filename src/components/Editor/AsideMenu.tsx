import { ReactComponent as Book } from '../../assets/Buttons/Book.svg';
import { ReactComponent as History } from '../../assets/Buttons/History.svg';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';
import { ReactComponent as Shortkeys } from '../../assets/Buttons/Shortkeys.svg';
import { ReactComponent as Settings } from '../../assets/Buttons/Settings.svg';
import { useState } from 'react';

const btnstyle =
  'flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949] hover:bg-[#313949]';

function AsideMenu() {
  const [shown, setShown] = useState('');

  function handleClick(btn: string) {
    if (btn === shown) {
      setShown('');
    } else {
      setShown(btn);
    }
  }

  return (
    <aside
      className={`sidebar flex bg-[#212A3B] transition-all duration-100 ${
        shown ? 'w-[33%] min-w-[350px]' : 'w-[50px] min-w-[50px]'
      }`}
    >
      <div className="buttons flex flex-col justify-between py-2">
        <div className="top-btns flex flex-col gap-2 xs:min-w-full">
          <button
            className={`m-[5px] ${btnstyle}`}
            title="Show documentation"
            onClick={() => handleClick('Docs')}
          >
            <Book />
          </button>
          <button
            className={`m-[5px] ${btnstyle}`}
            title="Show history"
            onClick={() => handleClick('History')}
          >
            <History />
          </button>
        </div>
        <div className="btm-btns flex flex-col gap-2 ">
          <button
            className={`m-[5px]  ${btnstyle}`}
            title="Re-fetch schema"
          >
            <div className="flex h-full w-full items-center justify-center duration-1000 active:animate-spin">
              <Refresh />
            </div>
          </button>
          <button
            className={`m-[5px] ${btnstyle}`}
            title="Open shortkeys dialog"
          >
            <Shortkeys />
          </button>
          <button
            className={`m-[5px] ${btnstyle}`}
            title="Open settings dialog"
          >
            <Settings />
          </button>
        </div>
      </div>
      <div className={`expands ${shown ? 'w-[300px] border-l border-gray-700' : 'w-0'}`}>
        <div className="p-5">
          {shown === 'Docs' && (
            <div>
              <p className="text-[32px]">Docs:</p>
              <p>A GraphQL schema provides a root type for each kind of operation.</p>
            </div>
          )}
          {shown === 'History' && (
            <div>
              <p className="text-[32px]">History:</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default AsideMenu;
