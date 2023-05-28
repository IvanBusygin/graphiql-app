import cls from 'clsx';
import { ReactComponent as ArrowShow } from '../../assets/Buttons/ArrowShow.svg';
import useStore, { ZState } from '../../store';

function EditorTools() {
  const {
    editorTools,
    toggleTools,
    variablesInput,
    headersInput,
    setVariablesInput,
    setHeadersInput,
  } = useStore((state: ZState) => state);

  const handleClick = (tools: string) => {
    tools === editorTools ? toggleTools('') : toggleTools(tools);
  };

  return (
    <div
      className={`flex flex-col rounded-3xl bg-grayLight p-2 pt-0 ${
        editorTools ? 'h-[300px]' : 'h-[60px]'
      }`}
    >
      <div
        className={cls(
          'bottom-header flex h-[60px] justify-between border-t border-[#424A58] bg-grayDark px-2',
          !editorTools && 'rounded-b-2xl',
        )}
      >
        <div className="flex gap-4">
          <button
            className={`self-center rounded-lg p-2 hover:bg-[#313949] ${
              editorTools === 'Variables' && 'bg-[#313949]'
            }`}
            onClick={() => handleClick('Variables')}
          >
            Variables
          </button>
          <button
            className={`self-center rounded-lg p-2 hover:bg-[#313949] ${
              editorTools === 'Headers' && 'bg-[#313949]'
            }`}
            onClick={() => handleClick('Headers')}
          >
            Headers
          </button>
        </div>
        <button
          className={`w-10 self-center rounded-lg p-2 hover:bg-[#313949] ${
            !!editorTools && 'rotate-180'
          }`}
          title={editorTools ? `Hide ${editorTools}` : 'Show Variables'}
          onClick={() => (editorTools ? handleClick('') : handleClick('Variables'))}
        >
          <ArrowShow />
        </button>
      </div>

      <div
        className={`bottom-footer rounded-b-2xl  ${
          editorTools ? 'opacity-1 h-full' : 'h-0 opacity-0'
        }`}
      >
        {editorTools === 'Variables' && (
          <textarea
            className="Variables scrollbar h-full w-full resize-none rounded-b-2xl bg-[#212A3B] px-4 pb-0 outline-none "
            name="Variables"
            id="Variables"
            cols={30}
            rows={10}
            spellCheck="false"
            placeholder="Variables input"
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setVariablesInput(e.currentTarget.value)
            }
            value={variablesInput}
          ></textarea>
        )}
        {editorTools === 'Headers' && (
          <textarea
            className="Headers scrollbar h-full w-full resize-none rounded-b-2xl bg-[#212A3B] px-4 pb-0 outline-none"
            name="Headers"
            id="Headers"
            cols={30}
            rows={10}
            spellCheck="false"
            placeholder="Headers input"
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setHeadersInput(e.currentTarget.value)
            }
            value={headersInput}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default EditorTools;
