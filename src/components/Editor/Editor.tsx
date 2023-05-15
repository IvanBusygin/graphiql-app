import { useState } from 'react';

function GraphiqlEditor(): React.ReactElement {
  const [inputValue, setInputValue] = useState('Query text here');

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    setInputValue(e.currentTarget.value);
  }
  return (
    <div className="mr-2">
      <textarea
        className="Editor scrollbar h-full w-full resize-none rounded-xl bg-[#212A3B] p-1 outline-none"
        name="Editor"
        id="Editor"
        cols={30}
        rows={10}
        value={inputValue}
        onInput={handleInput}
      ></textarea>
    </div>
  );
}

export default GraphiqlEditor;
