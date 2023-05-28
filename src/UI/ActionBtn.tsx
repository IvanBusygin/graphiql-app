import PulseLoader from 'react-spinners/PulseLoader';

export const ActionBtn = (props: { btnText: string; isLoading?: boolean; func?: VoidFunction }) => {
  return (
    <button
      className="group relative mb-3 flex w-fit justify-center self-center rounded-md border border-transparent bg-greenLight px-4 py-2 text-white transition-all duration-100 hover:bg-greenDark focus:outline-none focus:ring-2 focus:ring-greenDark focus:ring-offset-2 "
      onClick={props.func}
      disabled={props.isLoading}
      tabIndex={3}
      type="submit"
    >
      {props.isLoading ? (
        <PulseLoader
          color="white"
          size="10px"
          className="flex h-6 items-center align-middle"
        />
      ) : (
        props.btnText
      )}
    </button>
  );
};
