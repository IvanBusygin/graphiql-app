import React from 'react';
import Github_Logo from '../../assets/Github_Logo.png';
import rs_school_logo from '../../assets/rs_school_logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 flex h-[50px] w-full items-center justify-between bg-gray-200 p-4">
      <a
        href="https://github.com/IvanBusygin/graphiql-app"
        className="mx-4"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Github_Logo}
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
          src={rs_school_logo}
          alt="RS School logo"
          width="66"
          height="66"
        />
      </a>
    </footer>
  );
};
