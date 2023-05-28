import Editor from './Editor';
import Results from './Results';
import AsideMenu from './AsideMenu';
import Documentation from './Documentation';
import useStore, { SideMenuOptions, ZState } from '../../store';
import clsx from 'clsx';
import History from './History';

function GraphqlEditor(): React.ReactElement {
  const sideMenu = useStore((state: ZState) => state.sideMenu);

  return (
    <main
      className={clsx(
        'grid h-full w-full min-w-[270px] grow grid-rows-1 bg-grayDark text-grayText',
        sideMenu ? 'grid-cols-[50px_minmax(270px,_320px)_2fr]' : 'grid-cols-[50px_1fr]',
        sideMenu ? 'xs:grid-cols-[50px_1fr]' : 'xs:grid-cols-[50px_1fr]',
      )}
    >
      <AsideMenu />
      {sideMenu === SideMenuOptions.documentation && <Documentation />}
      {sideMenu === SideMenuOptions.history && <History />}
      <div
        className={clsx(
          'mr-4 flex h-full overflow-hidden ',
          'xs:mr-0 xs:flex-col xs:pl-0',
          'bg-grayDark p-2',
          {
            'xs:hidden': sideMenu,
          },
          'xs:grid xs:grid-rows-[600px_600px]',
        )}
      >
        <Editor />
        <Results />
      </div>
    </main>
  );
}

export default GraphqlEditor;
