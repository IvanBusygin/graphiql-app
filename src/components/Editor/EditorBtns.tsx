import { ReactComponent as Copy } from '../../assets/Buttons/Copy.svg';
import { ReactComponent as Execute } from '../../assets/Buttons/Execute.svg';
import { ReactComponent as Merge } from '../../assets/Buttons/Merge.svg';
import { ReactComponent as Prettify } from '../../assets/Buttons/Prettify.svg';

type FProps = (a: string) => void;

function EditorBtns({ func }: { func: FProps }) {
  return (
    <div className="flex flex-col gap-4 ">
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#2BAB7C] hover:bg-[#2A9E76]"
        title="Execute query"
        onClick={() => func('Exec')}
      >
        <Execute />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Prettify query"
        onClick={() => func('Prettify')}
      >
        <Prettify />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Merge fragments into query"
        onClick={() => func('Merge')}
      >
        <Merge />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Copy query"
        onClick={() => func('Copy')}
      >
        <Copy />
      </button>
    </div>
  );
}

export default EditorBtns;
