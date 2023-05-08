import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-yellow-800">
      <h1 className="text-9xl font-black">404</h1>
      <p className="mb-11 text-4xl">It looks like you&apos;re lost</p>
      <Link
        className="relative rounded border-2 border-solid border-yellow-800 bg-yellow-800 px-3.5 py-3.5 text-white hover:bg-white hover:text-yellow-800 active:left-1 active:top-1"
        to="/"
      >
        Go to the homepage
      </Link>
    </div>
  );
}
