import { ReactComponent as Copy } from '../../assets/Buttons/Copy.svg';
import { ReactComponent as Execute } from '../../assets/Buttons/Execute.svg';
import { ReactComponent as Merge } from '../../assets/Buttons/Merge.svg';
import { ReactComponent as Prettify } from '../../assets/Buttons/Prettify.svg';

function EditorBtns() {
  return (
    <div className="flex flex-col gap-4 ">
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#2BAB7C] hover:bg-[#2A9E76]"
        title="Execute query"
      >
        <Execute />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Prettify query"
      >
        <Prettify />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Merge fragments into query"
      >
        <Merge />
      </button>
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-lg hover:bg-[#313949]"
        title="Copy query"
      >
        <Copy />
      </button>
    </div>
  );
}

export default EditorBtns;
