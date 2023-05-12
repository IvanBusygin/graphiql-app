import { useNavigate } from 'react-router-dom';
import { ReactComponent as BtnClose } from '../assets/Buttons/BtnClose.svg';

export const CloseBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="absolute -right-5 -top-5 z-30"
    >
      <BtnClose className="h-10 w-10 cursor-pointer transition-all duration-300 hover:rotate-90 hover:fill-[#eb2525]" />
    </button>
  );
};
