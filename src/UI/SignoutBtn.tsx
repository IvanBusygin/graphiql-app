import { ReactComponent as BtnExit } from '../assets/Buttons/BtnExit.svg';
import { logout } from '../firebase';

export const SignoutBtn = () => {
  return (
    <button
      onClick={logout}
      className="hover: flex cursor-pointer p-2 hover:bg-red-500"
    >
      <BtnExit />
    </button>
  );
};
