import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../firebase';

export const MainPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="grid h-full w-full grid-cols-[_50px_minmax(270px,_1fr)] grid-rows-[1fr,_50px] gap-x-4 bg-[#212A3B] p-4 text-center text-white">
      <aside className="flex flex-col justify-between py-2">
        <div className="top-btns flex flex-col gap-2">
          <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
            1
          </button>
          <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
            2
          </button>
        </div>
        <div className="btm-btns flex flex-col gap-2">
          <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
            4
          </button>
          <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
            5
          </button>
          <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
            6
          </button>
        </div>
      </aside>
      <main className="graphiql-main h-full rounded-2xl bg-[#313949] p-2">
        <div className="grid h-full grid-cols-2 gap-2 rounded-xl">
          <div className="left-panel grid h-full grid-rows-[auto_50px] rounded-xl bg-[#212A3B]">
            <div className="grid grid-cols-[auto_50px] p-4 ">
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="scrollbar resize-none bg-[#212A3B] outline-none"
              ></textarea>
              <div className="flex flex-col">
                <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
                  1
                </button>
                <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
                  2
                </button>
                <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
                  3
                </button>
                <button className="m-[5px] h-[40px] w-[40px] rounded-lg border hover:bg-[#313949]">
                  4
                </button>
              </div>
            </div>
            <div className="flex justify-between border-t border-[#424A58] p-2">
              <div className="flex gap-4">
                <button className="self-center rounded p-2 hover:bg-[#313949]">Variables</button>
                <button className="self-center rounded p-2 hover:bg-[#313949]">Headers</button>
              </div>
              <button className="w-10 self-center rounded p-2 hover:bg-[#313949]">^</button>
            </div>
          </div>
          <div className="right-panel grid h-full w-full grid-rows-[auto_50px]">
            <div className="flex justify-center p-4">
              <p className="">Results</p>
            </div>
            <div className="flex justify-center border-t border-[#424A58]">
              <p className="self-center">some text here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
