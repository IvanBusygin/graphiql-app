import { ReactComponent as Copy } from '../../assets/Buttons/Copy.svg';
import { ReactComponent as Execute } from '../../assets/Buttons/Execute.svg';
import { ReactComponent as Merge } from '../../assets/Buttons/Merge.svg';
import { ReactComponent as Prettify } from '../../assets/Buttons/Prettify.svg';
import getData from '../../utils/api/getData';
import useStore, { ZState } from '../../store';
import cls from 'clsx';

const btnStyle =
  'm-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-lg stroke-grayText hover:bg-[#313949] hover:stroke-white';

function EditorBtns() {
  const headersInput = useStore((state: ZState) => state.headersInput);
  const query = useStore((state: ZState) => state.query);
  const setResult = useStore((state: ZState) => state.setResult);

  const handleClick = async () => {
    setResult({ output: '', time: 0, isLoading: true });
    const result = await getData(headersInput, query);
    result && setResult(result);
  };

  return (
    <div className="absolute right-5 top-5 flex flex-col rounded-tr-2xl bg-grayDark">
      <button
        className={cls('bg-[#2BAB7C] hover:bg-[#2A9E76]', btnStyle)}
        title="Execute query"
        onClick={handleClick}
      >
        <Execute />
      </button>
      <button
        className={cls(btnStyle)}
        title="Prettify query"
      >
        <Prettify />
      </button>
      <button
        className={cls(btnStyle)}
        title="Merge fragments into query"
      >
        <Merge />
      </button>
      <button
        className={cls(btnStyle)}
        title="Copy query"
      >
        <Copy />
      </button>
    </div>
  );
}

export default EditorBtns;
