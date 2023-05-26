import PulseLoader from 'react-spinners/PulseLoader';

export const ActionBtn = (props: { btnText: string; isLoading?: boolean; func?: VoidFunction }) => {
  return (
    <button
      className="group relative mb-3 flex w-fit justify-center self-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white transition-all duration-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-200"
      onClick={props.func}
      disabled={props.isLoading}
      tabIndex={3}
      type="submit"
    >
      {props.isLoading ? (
        <PulseLoader
          color="white"
          size="20px"
        />
      ) : (
        props.btnText
      )}
    </button>
  );
};
