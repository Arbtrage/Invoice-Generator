import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error= useRouteError();
  console.error(error);

  return (
    <div className="hero bg-base-200">
      <div className="hero-content p-10 w-9/12 justify-center flex flex-col text-center">
        <h1 className="text-5xl font-extrabold mb-5">Oops!</h1>
        <p className="text-md font-bold ">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}