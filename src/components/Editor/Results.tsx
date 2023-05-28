import cls from 'clsx';
import useStore, { ZState } from '../../store';
import HashLoader from 'react-spinners/HashLoader';

function Results() {
  const result = useStore((state: ZState) => state.result);

  return result.isLoading ? (
    <div className="flex h-full w-full items-center justify-center bg-grayLight p-2 pb-0">
      <HashLoader
        color="white"
        size="50px"
      />
    </div>
  ) : (
    <div
      className={cls(
        'RESULTS grid h-full w-full grid-rows-[1fr_auto] overflow-hidden bg-grayLight p-2 pb-0',
        'xs:rounded-b-3xl',
        'lg:rounded-r-3xl',
      )}
    >
      <div className="rightTop scrollbar relative grid grid-cols-[1fr_40px] grid-rows-1 overflow-auto p-4">
        <code className="absolute w-full whitespace-pre-wrap p-4 xs:-my-4">{result.output}</code>
      </div>
      {result.time > 0 && (
        <div className="rightBottom h-[60px] overflow-hidden border-t border-[#424A58] p-2 pt-0">
          <div className="flex h-full w-full items-center justify-start gap-4 ">
            <div
              className={`flex items-center self-center rounded px-2 py-1 text-grayDark ${
                result.status === 200 ? 'bg-green-400' : 'bg-red-400 '
              }`}
            >
              <span className="mr-2">status:</span>
              <p>{result.status}</p>
            </div>
            <div
              className={`flex items-center self-center rounded px-2 py-1 text-grayDark ${
                result.time > 250 ? 'bg-red-400' : 'bg-green-400 '
              }`}
            >
              <span className="mr-2">ping:</span>
              <p>{result.time}ms</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
