import { createBrowserRouter, RouterProvider, RouteObject, useRouteError } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { RegisterPage } from './pages/RegisterPage.tsx';
import { ResetPasswordPage } from './pages/ResetPasswordPage.tsx';
import Layout from './components/layout/Layout.tsx';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'welcome',
    element: <WelcomePage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'reset',
    element: <ResetPasswordPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routeConfig);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // return <div>{error?.message}</div>;
  return <div>ErrorBoundary</div>;
}
