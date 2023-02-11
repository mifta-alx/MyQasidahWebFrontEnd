import React from "react";
import { useRouteError } from "react-router-dom";
import { FiArrowRight} from 'react-icons/fi'

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center h-screen flex-col md:px-0 px-4">
      <p className="font-pjs-semibold text-base text-primary">{error.status}</p>
      <p className="font-pjs-bold text-5xl mt-2">{error.statusText}.</p>
      <p className="font-pjs-regular text-gray-500 mt-2">
        Oops! Sorry, an expected error has occured.
      </p>
      <a className="flex-row flex items-center font-pjs-medium mt-6 text-base text-primary" href="../">
        <p className="mr-1">Go back home</p>
        <FiArrowRight size={16} className="mt-[2px]"/>
      </a>
    </div>
  );
}
