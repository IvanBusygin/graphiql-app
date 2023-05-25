import { ReactComponent as Book } from '../../assets/Buttons/Book.svg';
import { ReactComponent as History } from '../../assets/Buttons/History.svg';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';
import { ReactComponent as Shortkeys } from '../../assets/Buttons/Shortkeys.svg';
import { ReactComponent as Settings } from '../../assets/Buttons/Settings.svg';
import cls from 'clsx';
import useStore, { ZState } from '../../store';
import { SideMenuOptions } from './GraphqlEditor';

const btnstyle =
  'flex h-[40px] w-[40px] m-[5px] items-center justify-center rounded-lg hover:bg-[#313949] hover:bg-[#313949] stroke-grayText hover:stroke-white';

function AsideMenu() {
  const sideMenu = useStore((state: ZState) => state.sideMenu);
  const toggleSideMenu = useStore((state: ZState) => state.toggleSideMenu);

  const handleClick = (menu: SideMenuOptions) => {
    menu === sideMenu ? toggleSideMenu(SideMenuOptions.hidden) : toggleSideMenu(menu);
  };

  return (
    <aside className="row-span-2 flex h-full bg-grayDark">
      <div className="buttons flex flex-col justify-between  py-2">
        <div className="top-btns flex flex-col gap-2  xs:min-w-full">
          <button
            className={cls(`${btnstyle}`)}
            title="Show documentation"
            onClick={() => handleClick(SideMenuOptions.documentation)}
          >
            <Book />
          </button>
          <button
            className={cls(`${btnstyle}`)}
            title="Show history"
            onClick={() => handleClick(SideMenuOptions.history)}
          >
            <History />
          </button>
        </div>
        <div className="btm-btns flex flex-col gap-2 ">
          <button
            className={cls(`${btnstyle}`)}
            title="Re-fetch schema"
          >
            <div className="btm-btns flex flex-col gap-2 ">
              <Refresh />
            </div>
          </button>
          <button
            className={cls(`${btnstyle}`)}
            title="Open shortkeys dialog"
          >
            <Shortkeys />
          </button>
          <button
            className={`${btnstyle} fill-grayText hover:fill-white`}
            title="Open settings dialog"
          >
            <Settings />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AsideMenu;
