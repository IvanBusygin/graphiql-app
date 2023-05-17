import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  func?: Dispatch<SetStateAction<string>>;
  text?: string;
}

function Editor({ text = '', func }: Props): React.ReactElement {
  const [inputValue, setInputValue] = useState(text);

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    setInputValue(e.currentTarget.value);
    func?.(e.currentTarget.value);
  }

  return (
    <div className="mr-4">
      <textarea
        className="Editor scrollbar h-full w-full resize-none rounded-xl bg-[#212A3B] p-1 outline-none"
        name="Editor"
        id="Editor"
        cols={30}
        rows={10}
        value={inputValue}
        onChange={handleInput}
      ></textarea>
    </div>
  );
}

export default Editor;
