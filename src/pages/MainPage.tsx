import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../firebase';

import GraphiqlEditor from '../components/Editor/Editor';
import AsideMenu from '../components/Editor/AsideMenu';
import EditorBtns from '../components/Editor/EditorBtns';
import EditorTools from '../components/Editor/EditorTools';

export const MainPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <section className="page grid h-full w-full grid-cols-[50px_1fr] bg-[#212A3B] p-4 pl-0 text-white">
      <div className="sidebar grid bg-[#212A3B]">
        <AsideMenu />
      </div>
      <div className="main grid grid-cols-[minmax(238px,_1fr),minmax(0,_1fr)] rounded-[20px] bg-[#313949] p-2">
        <div className="left grid grid-rows-[1fr_auto] rounded-[12px] bg-[#212A3B]">
          <div className="leftTop grid grid-cols-[1fr_40px] p-4">
            <GraphiqlEditor />
            <div className="editorBtns">
              <EditorBtns />
            </div>
          </div>
          <EditorTools />
        </div>
        <div className="right grid grid-rows-[1fr_auto] overflow-hidden">
          <div className="rightTop grid grid-cols-[1fr_40px] p-4">
            <div>Results will be shown here</div>
          </div>
          <div className="rightBottom h-[50px]">
            <div className="flex h-full w-full items-center border-t border-[#424A58] p-4">
              <p className="self-center">GraphQL query resuls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
