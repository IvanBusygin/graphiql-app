import useStore, { ZState } from '../../store';
import EditorBtns from './EditorBtns';
import EditorTools from './EditorTools';
import cls from 'clsx';

function Editor(): React.ReactElement {
  const { queryInput, setQueryInput } = useStore((state: ZState) => state);

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    setQueryInput(e.currentTarget.value);
  }

  return (
    <section
      className={cls(
        'EDITOR flex h-full w-full flex-col bg-grayLight',
        'xs:rounded-t-3xl',
        'lg:rounded-l-3xl',
      )}
    >
      <code className="relative flex h-full w-full rounded-3xl p-2 pb-0">
        <textarea
          className="scrollbar h-full w-full resize-none overflow-auto rounded-t-2xl bg-grayDark p-4 pr-12 text-white outline-none"
          name="Editor"
          id="Editor"
          cols={30}
          rows={10}
          value={queryInput}
          onChange={handleInput}
          spellCheck="false"
        ></textarea>
        <EditorBtns />
      </code>
      <EditorTools />
    </section>
  );
}

export default Editor;
