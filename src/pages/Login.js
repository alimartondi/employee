import React from "react";
import { Link } from "react-router-dom";
import EmployeeLogo from "../assets/images/logo.svg";

export default function Login() {
  return (
    <div className="login-page h-screen flex lg:items-center">
      <div className="grid md:grid-cols-2 gap-4 w-full lg:w-8/12 h-full lg:h-3/4 mx-auto lg:bg-white lg:shadow-lg rounded-xl items-center lg:overflow-hidden">
        <div className="flex h-full items-center bg-blue-500 pb-6">
          <img
            src={EmployeeLogo}
            alt="employee-logo"
            className="h-14 lg:h-20 mx-auto mt-10"
          />
        </div>
        <div className="px-3 lg:px-8">
          <div className="bg-white shadow-md lg:shadow-none px-3 py-10 -mt-20 lg:mt-0 rounded-lg">
            <p className="text-sm mb-1">Welcome to Employee</p>
            <h1 className="w-5/6 mb-5 font-bold text-2xl md:text-3xl font-gray-600">
              Log into your Account!
            </h1>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="mt-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full focus:shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border"
                  required
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full focus:shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border"
                  required
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Remember me!
                  </label>
                </div>
              </div>
              <Link to="/userlists">
                <button className="bg-blue-500 py-3 w-full rounded-lg text-white font-medium">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
