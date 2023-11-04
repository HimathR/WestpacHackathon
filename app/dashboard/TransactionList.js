import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TransactionList = ({ accountID, transactions }) => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const accountTransactions = transactions.filter(
    (txn) => txn.accountID === accountID
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    const fetchAnalysis = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/analyse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ transactions: accountTransactions }),
        });

        if (response.ok) {
          const data = await response.json();
          setAnalysis(data.advice);
        } else {
          setAnalysis("Could not fetch analysis at the moment.");
        }
      } catch (error) {
        console.error("Error fetching analysis:", error);
        setAnalysis("An error occurred while fetching analysis.");
      } finally {
        setLoading(false);
      }
    };

    if (accountTransactions.length > 0) {
      fetchAnalysis();
    }
  }, []);
  // Styles
  const listItemStyle =
    "px-4 p-2 flex font-bold justify-between items-center rounded-lg";

  const transactionDescriptionStyle = "flex-1";
  const positiveAmountStyle = "text-green-500 font-semibold";
  const negativeAmountStyle = "text-westpac-red font-semibold";
  const transactionDateStyle = "text-body font-normal text-sm";

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
      {loading ? (
        <motion.div
          className="mt-4 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 relative">
            <Image
              src="/thonkicon.png"
              alt="Loading"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </motion.div>
      ) : (
        <>
          {analysis && <p className="mb-4 text-gray-700">{analysis}</p>}
          {accountTransactions.length === 0 ? (
            <p className="text-gray-500">No recent transactions.</p>
          ) : (
            <ul className="space-y-2">
              {accountTransactions.map((txn) => (
                <li
                  key={txn.recordID}
                  className={listItemStyle}
                  style={{
                    boxShadow:
                      "0 4px 6px -1px rgba(220, 38, 38, 0.1), 0 2px 4px -1px rgba(220, 38, 38, 0.06)",
                  }}
                >
                  <span className={transactionDescriptionStyle}>
                    {txn.trxDescription} <br />
                    <span className={transactionDateStyle}>
                      {new Date(txn.trxDate).toLocaleDateString()}
                    </span>
                  </span>
                  <span
                    className={
                      txn.trxAmount < 0
                        ? negativeAmountStyle
                        : positiveAmountStyle
                    }
                  >
                    ${txn.trxAmount.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default TransactionList;
