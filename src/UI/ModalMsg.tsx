import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  title?: string;
  text?: string;
  setIsModal: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
}

export const ModalMsg = ({ setIsModal, isOpen, title, text }: ModalProps) => {
  return (
    <div
      className={`absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-xl p-6 backdrop-blur-2xl transition-all duration-200 ${
        isOpen ? 'opacity-1 z-100 translate-y-0' : 'z-1 -translate-y-full opacity-0'
      }`}
    >
      {title && <p className="border-b-2 border-black p-1 text-center font-bold">{title}</p>}
      {text && <p className="p-2 text-center text-lg ">{text}</p>}
      <button
        onClick={() => setIsModal('')}
        tabIndex={0}
        disabled={!isOpen}
        className="m-4 rounded-xl bg-blue-700 px-4 py-2 text-white"
      >
        OK!
      </button>
    </div>
  );
};
