interface Props {
  result: string;
  fetchTime: number;
}

function Results({ result, fetchTime }: Props) {
  return (
    <div className="right grid grid-rows-[1fr_auto] overflow-hidden p-2">
      <div className="rightTop scrollbar relative grid grid-cols-[1fr_40px] grid-rows-1 p-4">
        <code className="absolute whitespace-pre-wrap p-4">{result}</code>
      </div>
      {fetchTime > 0 && (
        <div className="rightBottom h-[50px]">
          <div className="flex h-full w-full items-center border-t border-[#424A58] p-4">
            <span className="mr-2">ping:</span>
            <p
              className={`self-center rounded px-2 py-1 ${
                fetchTime > 250 ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              {fetchTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
