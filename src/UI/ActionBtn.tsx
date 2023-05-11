export const ActionBtn = (props: { btnText: string; isLoading?: boolean; func?: VoidFunction }) => {
  const loader = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 animate-spin"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
  return (
    <button
      className="group relative flex w-fit justify-center self-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white transition-all duration-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-200"
      onClick={props.func}
      disabled={props.isLoading}
      type="submit"
    >
      {props.isLoading ? loader : props.btnText}
    </button>
  );
};
