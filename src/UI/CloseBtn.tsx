import { useNavigate } from 'react-router-dom';
import { ReactComponent as BtnClose } from '../assets/Buttons/BtnClose.svg';

export const CloseBtn = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>
      <BtnClose />
    </button>
  );
};
