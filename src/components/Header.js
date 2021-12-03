import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import EmployeeLogo from "../assets/images/blue-logo.svg";
import User from "../assets/images/user.png";

export default function Header() {
  const isOnTop = useScrollHandler();
  return (
    <header className={`${isOnTop ? "" : "shadow-md"} fixed w-full bg-white`}>
      <nav className="container mx-auto flex justify-between py-3 md:py-4 px-3 lg:px-20">
        <div className="brand">
          <Link to="/users">
            <img src={EmployeeLogo} alt="employee-logo" />
          </Link>
        </div>
        <div className="profile relative">
          <Menu>
            <Menu.Button>
              <img src={User} alt="user" />
            </Menu.Button>
            <Menu.Items className="flex flex-col absolute bg-white p-4 rounded-lg shadow right-0">
              <Menu.Item>
                {({ active }) => (
                  <Link className={`${active && "text-gray-500"}`} to="/">
                    Logout
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </nav>
    </header>
  );
}

const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
