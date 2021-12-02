import React, { useState, useEffect } from "react";
import EmployeeLogo from "../assets/images/blue-logo.svg";
import User from "../assets/images/user.png";

export default function Header() {
  const isOnTop = useScrollHandler();
  return (
    <header className={`${isOnTop ? "" : "shadow"}w-full bg-white`}>
      <nav className="container mx-auto flex justify-between py-3 md:py-4 px-3 lg:px-20">
        <div className="brand">
          <img src={EmployeeLogo} alt="employee-logo" />
        </div>
        <div className="profile">
          <img src={User} alt="user" />
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
