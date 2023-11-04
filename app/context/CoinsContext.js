"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const CoinsContext = createContext();

export const useCoins = () => {
  return useContext(CoinsContext);
};

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(25); // Initial value of coins
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial value of isLoggedIn

  useEffect(() => {
    if (localStorage.getItem("userCoins")) {
      setIsLoggedIn(true);
    }
  }, []);

  const value = {
    coins,
    setCoins,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>
  );
};
