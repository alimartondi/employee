import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserLists() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    }
    getUsers();
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <div className="container px-3 lg:px-20 mx-auto flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-sm overflow-hidden rounded-lg">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-6 text-left text-xs font-base text-gray-500 uppercase tracking-wider hidden md:block"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-2 lg:px-6 py-6 text-left text-xs font-base text-gray-500 uppercase tracking-wider"
                    >
                      User Lists
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {users.map((user, id) => (
                    <tr key={id}>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:block">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.id}
                        </span>
                      </td>
                      <td className="px-2 md:px-6 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 md:h-14 w-10 md:w-14">
                            <img
                              className="h-10 md:h-14 w-10 md:w-14 rounded-full"
                              src={user.avatar}
                              alt={user.firstName}
                            />
                          </div>
                          <div className="ml-4">
                            <Link to={`/users/${user.id}`}>
                              <div className="text-md font-medium text-gray-600">
                                {user.first_name} {user.last_name}
                              </div>
                            </Link>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 ">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
