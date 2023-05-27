import { ReactComponent as Copy } from '../../assets/Buttons/Copy.svg';
import { ReactComponent as Execute } from '../../assets/Buttons/Execute.svg';
import getData from '../../utils/api/getData';
import useStore, { ZState } from '../../store';
import cls from 'clsx';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

const btnStyle =
  'm-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-lg stroke-grayText hover:bg-[#313949] hover:stroke-white';

function EditorBtns() {
  const { headersInput, variablesInput, queryInput, setResult } = useStore(
    (state: ZState) => state,
  );
  const handleClick = async () => {
    setResult({ output: '', time: 0, isLoading: true });
    const result = await getData(queryInput, variablesInput, headersInput);
    result && setResult(result);
  };

  return (
    <div className="absolute right-5 top-5 flex flex-col rounded-tr-2xl bg-grayDark">
      <button
        className={cls(
          'm-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-lg',
          'bg-[#2BAB7C] stroke-[#2BAB7C] hover:bg-[#2A9E76]',
          'active:ring-2 active:ring-grayText',
        )}
        title="Execute query"
        onClick={handleClick}
      >
        <Execute />
      </button>
      <button
        className={cls(btnStyle)}
        title="Copy query"
        onClick={() => {
          copy(queryInput);
          toast.success('Query copied to clipboard', { autoClose: 3000 });
        }}
      >
        <Copy />
      </button>
    </div>
  );
}

export default EditorBtns;
