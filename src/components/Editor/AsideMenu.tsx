import { ReactComponent as Book } from '../../assets/Buttons/Book.svg';
import { ReactComponent as History } from '../../assets/Buttons/History.svg';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';
import { ReactComponent as Shortkeys } from '../../assets/Buttons/Shortkeys.svg';
import { ReactComponent as Settings } from '../../assets/Buttons/Settings.svg';

const btnstyle =
  'flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949] hover:bg-[#313949]';

function AsideMenu() {
  return (
    <aside className="flex flex-col justify-between py-2">
      <div className="top-btns flex flex-col gap-2 ">
        <button
          className={`m-[5px] ${btnstyle}`}
          title="Show documentation"
        >
          <Book />
        </button>
        <button
          className={`m-[5px] ${btnstyle}`}
          title="Show history"
        >
          <History />
        </button>
      </div>
      <div className="btm-btns flex flex-col gap-2 ">
        <button
          className={`m-[5px] ${btnstyle}`}
          title="Re-fetch schema"
        >
          <Refresh />
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
    </aside>
  );
}

export default AsideMenu;
