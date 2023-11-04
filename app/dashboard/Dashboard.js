"use client";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import {
  SAVINGS_DATA,
  mockAccounts,
  mockTransactions,
} from "../../constants/data";
import AskBucky from "./AskBucky";
import SavingsCard from "./SavingsCard";
import AccountInformation from "./AccountInformation";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { TypingText } from "../../components";
import Image from "next/image";
import Exchange from "./ExchangeCoins";

const Dashboard = () => {
  const { userDetails, isLoggedIn } = useUser();
  const [savingsGoalAmount, setSavingsGoalAmount] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // if (userDetails) {
    //   // Fetch linked accounts
    //   fetch(`/api/accounts?customerID=${userDetails.customerID}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setAccounts(data);
    //       // For each account, fetch its type and recent transactions
    //       data.forEach((account) => {
    //         fetch(`/api/accountType?accountTypeID=${account.accountTypeID}`)
    //           .then((res) => res.json())
    //           .then((typeData) => {
    //             // Add account type name to the account object
    //             account.accountTypeName = typeData.accountName;
    //             setAccounts((prevAccounts) => [...prevAccounts]); // This will cause a re-render
    //           });

    //         fetch(
    //           `/api/transactions?customerID=${userDetails.customerID}&accountID=${account.accountID}`
    //         )
    //           .then((res) => res.json())
    //           .then((trxData) => {
    //             setTransactions((prev) => [...prev, ...trxData]);
    //           });
    //       });
    //     });

    // } else
    setTransactions(mockTransactions);
    setAccounts(mockAccounts);
  }, [isLoggedIn, userDetails, accounts, transactions, savingsGoalAmount]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gray-100 p-6 text-center md:text-left">
        <div className="mb-4 w-full md:w-auto">
          <h1 className="text-3xl font-bold text-gray-800">
            Don't Forget To Sign In!
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            You need to sign in to view your dashboard! If you are on the
            internet deployment, you can use the credentials below:
          </p>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <ul className="list-inside list-disc">
              <li>
                <span className="font-semibold">Username:</span> 123456
              </li>
              <li>
                <span className="font-semibold">Password:</span> Test123
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="flex-shrink-0 w-full md:w-auto"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/thonk.png"
            alt="Bucky"
            width={300}
            height={300}
            className="rounded-lg mx-auto"
          />
        </motion.div>
      </div>
    );
  }
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="p-4 md:p-6 bg-gray-100 min-h-screen mx-auto"
    >
      <TypingText
        title="Welcome To The Future Of Saving"
        textStyles="text-center mb-4 justify-left"
      />
      <AskBucky />
      <SavingsCard
        currentBalance={SAVINGS_DATA.currentBalance}
        balanceLastWeek={SAVINGS_DATA.balanceLastWeek}
      />
      <AccountInformation accountID="ACC0010" />
      <AccountInformation accountID="ACC0015" />
      <Exchange />
    </motion.div>
  );
};

export default Dashboard;
