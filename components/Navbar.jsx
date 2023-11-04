"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useCoins } from "../app/context/CoinsContext";
import { useUser } from "../app/context/UserContext";
import Modal from "./Modal";

import { useState, useEffect } from "react";

const LoginForm = ({ onLogin }) => {
  const [customerID, setCustomerID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Mock user data for fallback login
  const mockUserData = {
    customerID: "123456",
    firstName: "John",
    lastName: "Doe",
    password: "Test123",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerID || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerID }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.password === password) {
        onLogin({
          customerID: data.customerID,
          firstName: data.firstName,
          lastName: data.lastName,
        });
      } else {
        setError("Invalid credentials, or you're not connected to the VPN.");
      }
    } catch (error) {
      console.error("Login failed, using mock login", error);
      if (
        mockUserData.customerID === customerID &&
        mockUserData.password === password
      ) {
        onLogin({
          customerID: mockUserData.customerID,
          firstName: mockUserData.firstName,
          lastName: mockUserData.lastName,
        });
      } else {
        setError("Mock login failed. Invalid credentials.");
      }
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row bg-white rounded-lg p-8 max-w-3xl w-full"
    >
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Sign In To Westpac RooRewards
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={customerID}
            onChange={(e) => setCustomerID(e.target.value)}
            placeholder="Customer ID"
            className="border rounded w-full py-2 px-3 mb-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border rounded w-full py-2 px-3 mb-4"
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="bg-westpac-red hover:bg-red-400 text-white py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
      </div>
      <div
        className="w-full h-64 lg:h-auto lg:flex-1 bg-contain bg-no-repeat bg-center "
        style={{ backgroundImage: 'url("/logincover.png")' }}
      ></div>
    </motion.div>
  );
};
const Navbar = () => {
  const router = useRouter();
  const { coins } = useCoins();
  const { userDetails, setUserDetails, isLoggedIn, setIsLoggedIn } = useUser();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Games", path: "/games" },
    { label: "RooChat", path: "/chatbot" },
  ];

  const isActive = (path) => {
    if (router.pathname === path) {
      return "text-body outline-none focus:outline-none py-2 px-4 border-b-2 border-westpac-red";
    }
    return "text-body outline-none focus:outline-none py-2 px-4 hover:border-b-2 hover:border-westpac-red";
  };

  const buttonClasses =
    "bg-westpac-red hover:bg-red-400 text-white py-2 px-4 rounded mt-2 md:mt-0";

  const [isModalOpen, setModalOpen] = useState(false);
  const handleLogin = (userData) => {
    // Save user's coin count to local storage
    localStorage.setItem("userCoins", userData.coins);
    setUserDetails({
      customerID: userData.customerID,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails(null);
    localStorage.removeItem("userCoins");
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="show"
      whileInView="show"
      className={`${styles.xPaddings} py-4 md:py-8 relative shadow-md`}
    >
      <div className="absolute w-[50%] gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row justify-between items-center`}
      >
        <div className="flex justify-between w-full md:w-auto items-center space-x-2 md:space-x-4 mb-4 md:mb-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="roo rewards logo"
              className="w-[144px] md:w-[264px] object-contain cursor-pointer"
            />
          </Link>

          {/* Display coin icon and count only if user is logged in, otherwise just display the coin icon */}
          <div className="flex items-center text-westpac-red font-bold md:hidden">
            <img
              src="/coin-icon.png"
              alt="coin icon"
              className={`w-12 h-12 object-contain ${isLoggedIn ? "mr-2" : ""}`}
            />
            {isLoggedIn && coins}
          </div>

          <div className="h-[64px] w-[1px] bg-gray-400 hidden md:block"></div>
        </div>

        <div className="flex flex-row space-x-2 md:space-x-4 items-center w-full md:w-auto overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div className={isActive(item.path)}>{item.label}</div>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              {/* Coins icon and count for larger screens */}
              <div className="flex items-center text-westpac-red font-bold mr-4 hidden md:flex">
                <img
                  src="/coin-icon.png"
                  alt="coin icon"
                  className="w-12 h-12 object-contain "
                />
                <span className="mr-4">{coins}</span>
              </div>

              {/* Sign out button for all screens */}
              <button onClick={handleLogout} className={buttonClasses}>
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className={buttonClasses}
            >
              Sign In
            </button>
          )}
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <LoginForm onLogin={handleLogin} />
          </Modal>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
