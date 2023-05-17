import { useState } from 'react';
import { ReactComponent as ArrowShow } from '../../assets/Buttons/ArrowShow.svg';

function EditorTools() {
  const [isOpen, setIsOpen] = useState('');
  const [vars, setVars] = useState('Variables div is open');
  const [headers, setHeaders] = useState('Headers div is open');

  function handleVarsChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setVars(event.currentTarget.value);
  }
  function handleHeadersChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setHeaders(event.currentTarget.value);
  }

  return (
    <div
      className={`grid grid-cols-1 flex-col border-t border-[#424A58] transition-all duration-100 ${
        isOpen ? 'h-[300px]' : 'h-[50px]'
      }`}
    >
      <div className="bottom-header flex h-[50px] justify-between px-2">
        <div className="flex gap-4">
          <button
            className={`self-center rounded-lg p-2 hover:bg-[#313949] ${
              isOpen === 'Variables' && 'bg-[#313949]'
            }`}
            onClick={() => setIsOpen('Variables')}
          >
            Variables
          </button>
          <button
            className={`self-center rounded-lg p-2 hover:bg-[#313949] ${
              isOpen === 'Headers' && 'bg-[#313949]'
            }`}
            onClick={() => setIsOpen('Headers')}
          >
            Headers
          </button>
        </div>
        <button
          className={`w-10 self-center rounded-lg p-2 hover:bg-[#313949] ${
            !!isOpen && 'rotate-180'
          }`}
          onClick={() => (isOpen ? setIsOpen('') : setIsOpen('Variables'))}
          title={isOpen ? `Hide ${isOpen}` : 'Show Variables'}
        >
          <ArrowShow />
        </button>
      </div>

      <div
        className={`bottom-footer mr-4 transition-all duration-1000 ${
          isOpen ? 'opacity-1 h-full' : 'h-0 opacity-0'
        }`}
      >
        {isOpen === 'Variables' && (
          <textarea
            className="Variables scrollbar h-full w-full resize-none rounded-xl bg-[#212A3B] px-4 pb-0 outline-none"
            name="Variables"
            id="Variables"
            cols={30}
            rows={10}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => handleVarsChange(e)}
            value={vars}
          ></textarea>
        )}
        {isOpen === 'Headers' && (
          <textarea
            className="Headers scrollbar h-full w-full resize-none rounded-xl bg-[#212A3B] px-4 pb-0 outline-none "
            name="Headers"
            id="Headers"
            cols={30}
            rows={10}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => handleHeadersChange(e)}
            value={headers}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default EditorTools;
