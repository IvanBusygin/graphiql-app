import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between bg-gray-200 p-4">
      <a
        href="https://github.com/IvanBusygin/graphiql-app"
        className="mx-4"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png"
          alt="GitHub logo"
          width="52"
          height="52"
        />
      </a>
      <span className="mx-4">2023</span>
      <a
        href="https://rs.school/react/"
        className="mx-4"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="RS School logo"
          width="66"
          height="66"
        />
      </a>
    </footer>
  );
};
