import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="404-not-found h-screen">
      <div className="container h-full flex flex-col justify-center items-center">
        <div id="notfound px-6">
          <div className="notfound text-center">
            <div className="notfound-404">
              <h3 className="font-medium">Oops! Page not found</h3>
              <h1 className="font-bold text-5xl lg:text-9xl text-gray-900 tracking-tighter">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
            </div>
            <h3 className="font-base max-w-xs">
              we are sorry, but the page you requested was not found
            </h3>
            <Link to="users">
              <button className="flex mx-auto items-center bg-gray-900 text-white py-3 rounded-lg px-4 mt-5">
                Back Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
