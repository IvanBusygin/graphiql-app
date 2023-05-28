import { ReactComponent as Book } from '../../assets/Buttons/Book.svg';
import { ReactComponent as History } from '../../assets/Buttons/History.svg';
import { ReactComponent as Settings } from '../../assets/Buttons/Settings.svg';
import cls from 'clsx';
import useStore, { SideMenuOptions, ZState } from '../../store';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const btnstyle =
  'flex h-[40px] w-[40px] ml-[5px] items-center justify-center rounded-lg hover:bg-[#313949] hover:bg-[#313949] stroke-grayText hover:stroke-white active:ring-2 active:ring-grayText';

function AsideMenu() {
  const { t } = useTranslation();
  const { sideMenu, toggleSideMenu } = useStore((state: ZState) => state);
  const [settingsClick, setSettingsClick] = useState(0);
  const handleClick = (menu: SideMenuOptions) => {
    menu === sideMenu ? toggleSideMenu(SideMenuOptions.hidden) : toggleSideMenu(menu);
  };

  useEffect(() => {
    settingsClick === 1 && toast.warning(t('settings.msg1'), { autoClose: 1000 });
    settingsClick === 2 && toast.warning(t('settings.msg2'), { autoClose: 1000 });
    settingsClick === 3 && toast.warning(t('settings.msg3'), { autoClose: 1000 });
    settingsClick === 4 && toast.warning(t('settings.msg4'), { autoClose: 1000 });
    settingsClick === 5 && toast.warning(t('settings.msg5'));
    if (settingsClick === 10) {
      window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
  }, [settingsClick, t]);

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
            onClick={() => setSettingsClick(settingsClick + 1)}
          >
            <Settings />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AsideMenu;
