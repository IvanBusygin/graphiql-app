import { Outlet } from 'react-router-dom';

import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { ToastContainer } from 'react-toastify';

function LayoutMain() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex-grow bg-grayLight">
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="z-50 mt-12"
        />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default LayoutMain;
