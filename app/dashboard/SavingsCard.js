import { useState, useEffect } from "react";

const SavingsCard = ({ currentBalance, balanceLastWeek }) => {
  const [savingsGoalAmount, setSavingsGoalAmount] = useState(() => {
    const savedGoal = localStorage.getItem("savingsGoalAmount");
    return savedGoal ? JSON.parse(savedGoal) : 25000;
  });

  const [isGoalSet, setIsGoalSet] = useState(() => {
    const goalSet = localStorage.getItem("isGoalSet");
    return goalSet ? JSON.parse(goalSet) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "savingsGoalAmount",
      JSON.stringify(savingsGoalAmount)
    );
    localStorage.setItem("isGoalSet", JSON.stringify(isGoalSet));
  }, [savingsGoalAmount, isGoalSet]);

  const handleSavingsGoalAmountChange = (e) => {
    setSavingsGoalAmount(e.target.value);
  };

  const handleSavingsGoalSubmit = (e) => {
    e.preventDefault();
    setIsGoalSet(true);
  };

  const progressPercentage = (currentBalance / savingsGoalAmount) * 100;

  return (
    <div className="rounded-lg p-4 md:p-6 bg-white shadow-md mb-6">
      <h1 className="text-3xl font-bold mb-4">Savings Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Current Balance</h2>
          <p className="text-2xl font-bold text-westpac-red">
            ${currentBalance.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Balance Last Week</h2>
          <p className="text-2xl font-bold text-westpac-red">
            ${balanceLastWeek.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Set Your Savings Goal</h2>
        <form onSubmit={handleSavingsGoalSubmit}>
          <div className="mb-4">
            <label
              htmlFor="savingsGoalAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your savings goal amount
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="savingsGoalAmount"
                value={savingsGoalAmount}
                onChange={handleSavingsGoalAmountChange}
                placeholder="Enter amount"
                className="border rounded w-full py-2 px-3"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-westpac-red hover:bg-red-400 text-white py-2 px-4 rounded"
          >
            Set Goal
          </button>
        </form>
      </div>

      {isGoalSet && savingsGoalAmount > currentBalance && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Progress Towards Goal</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-westpac-red">
                  ${currentBalance.toFixed(2)} / ${savingsGoalAmount}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-300 to-red-500 via-red-700 animated-gradient"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingsCard;
