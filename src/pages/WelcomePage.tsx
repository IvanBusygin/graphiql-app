import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Beaker } from '../assets/Buttons/Beaker.svg';
import { ReactComponent as Key } from '../assets/Buttons/Key.svg';

export function WelcomePage() {
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();

  const btnStyles =
    'px-4 py-6 m-4 flex h-10 items-center justify-center rounded-lg bg-[#2A9E76] hover:bg-[#2BAB7C]';

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center  bg-grayLight align-middle text-lg text-white">
      <h1 className="m-10 text-center text-3xl font-bold text-[#2A9E76] underline">
        {t('welcome')}
      </h1>
      {loading ? (
        <>
          <p>loading...</p>
        </>
      ) : !user ? (
        <div className="flex flex-col items-center justify-center text-white">
          <p className="m-2"> {t('toLogIn')} </p>
          <Link
            className={btnStyles}
            to="/login"
            title="Go to the login page"
          >
            <Key />
            <p className="ml-2 "> {t('btnToLogIn')} </p>
          </Link>
        </div>
      ) : (
        <p className="flex flex-col items-center justify-center text-white">
          <p className="m-2"> {t('toEditor')} </p>
          <Link
            className={btnStyles}
            to="/main"
            title="To GraphiQL API Editor"
          >
            <Beaker />
            <p className="ml-2 "> {t('btnToEditor')} </p>
          </Link>
        </p>
      )}
      <div className="mt-20 flex w-full flex-col items-center gap-20">
        <div className="flex w-[75%] max-w-[1000px] flex-wrap justify-center gap-4 text-center">
          <h1 className="text-3xl">{t('aboutProjectTitle')}</h1>
          <p className="rounded-xl bg-grayDark p-4">{t('aboutProjectText')}</p>
        </div>
        <div className="flex w-[75%] max-w-[1000px] flex-wrap justify-center gap-4 text-center">
          <h1 className="text-3xl">{t('aboutRSSchoolTitle')}</h1>
          <p className="rounded-xl bg-grayDark p-4">{t('aboutRSSchoolText')}</p>
        </div>
        <div className="mb-10 flex flex-col text-center">
          <h1 className="mb-5 text-3xl">{t('aboutUs')}</h1>
          <div className="flex flex-wrap justify-center gap-10 rounded-xl bg-grayDark p-10">
            <Link
              to="https://github.com/IvanBusygin"
              className="group relative flex h-[250px] w-[250px] shrink-0 overflow-hidden rounded-full shadow-2xl ring-2 ring-darkRed transition-all duration-500 hover:ring-8"
            >
              <img
                src="https://avatars.githubusercontent.com/u/88594437?v=4"
                alt="Ivan Busygin"
                className=" brightness-100  transition-all duration-500 group-hover:scale-125  group-hover:brightness-[10%]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-full grid place-items-center text-3xl underline transition-all duration-500 group-hover:top-0">
                Ivan <br /> Busygin
              </div>
            </Link>
            <Link
              to="https://github.com/BesoBerdzenishvili"
              className="group relative flex h-[250px] w-[250px] shrink-0 overflow-hidden rounded-full shadow-2xl ring-2 ring-darkRed transition-all duration-500 hover:ring-8"
            >
              <img
                src="https://avatars.githubusercontent.com/u/76405148?v=4"
                alt="Beso Berdzenishvili"
                className=" brightness-100  transition-all duration-500 group-hover:scale-125  group-hover:brightness-[10%]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-full grid place-items-center text-3xl underline transition-all duration-500 group-hover:top-0">
                Beso <br /> Berdzenishvili
              </div>
            </Link>
            <Link
              to="https://github.com/rasosha"
              className="group relative flex h-[250px] w-[250px] shrink-0 overflow-hidden rounded-full shadow-2xl ring-2 ring-darkRed transition-all duration-500 hover:ring-8"
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQH3WcAMmUBIew/profile-displayphoto-shrink_800_800/0/1683787710715?e=1690416000&v=beta&t=lCDSEFVVFfofzcpsH6bnCuXqW7opWYj9WDOkw73rNco"
                alt="rasosha"
                className=" brightness-100  transition-all duration-500 group-hover:scale-125  group-hover:brightness-[10%]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-full grid place-items-center text-3xl underline transition-all duration-500 group-hover:top-0">
                Andrei <br /> Rassokhin
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
