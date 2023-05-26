import { ReactComponent as Book } from '../../assets/Buttons/Book.svg';
import { ReactComponent as History } from '../../assets/Buttons/History.svg';
import { ReactComponent as Settings } from '../../assets/Buttons/Settings.svg';
import cls from 'clsx';
import useStore, { SideMenuOptions, ZState } from '../../store';

const btnstyle =
  'flex h-[40px] w-[40px] ml-[5px] items-center justify-center rounded-lg hover:bg-[#313949] hover:bg-[#313949] stroke-grayText hover:stroke-white active:ring-2 active:ring-grayText';

function AsideMenu() {
  const sideMenu = useStore((state: ZState) => state.sideMenu);
  const toggleSideMenu = useStore((state: ZState) => state.toggleSideMenu);

  const handleClick = (menu: SideMenuOptions) => {
    menu === sideMenu ? toggleSideMenu(SideMenuOptions.hidden) : toggleSideMenu(menu);
  };

  return (
    <aside className="row-span-2 flex h-full bg-grayDark">
      <div className="buttons flex flex-col justify-between  py-2">
        <div className="top-btns flex flex-col gap-2 xs:min-w-full">
          <button
            className={cls(
              `${btnstyle}`,
              sideMenu === SideMenuOptions.documentation && 'bg-grayLight',
            )}
            title="Show documentation"
            onClick={() => handleClick(SideMenuOptions.documentation)}
          >
            <Book />
          </button>
          <button
            className={cls(`${btnstyle}`, sideMenu === SideMenuOptions.history && 'bg-grayLight')}
            title="Show history"
            onClick={() => handleClick(SideMenuOptions.history)}
          >
            <History />
          </button>
        </div>
        <div className="btm-btns flex flex-col">
          <button
            className={cls(`${btnstyle}`, 'fill-grayText hover:fill-white')}
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
