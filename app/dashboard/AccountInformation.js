import React from "react";
import TransactionList from "./TransactionList";
import {
  mockAccounts,
  mockTransactions,
  mockAccountTypes,
} from "../../constants/data";

const AccountInformation = ({ accountID }) => {
  const account = mockAccounts.find((acc) => acc.accountID === accountID) || {};
  const transactions = mockTransactions.filter(
    (trx) => trx.accountID === accountID
  );
  const accountType =
    mockAccountTypes.find(
      (type) => type.accountTypeID === account.accountTypeID
    ) || {};

  return (
    <div className="flex flex-col rounded-lg p-4 md:p-6 bg-white shadow-md mb-6">
      <h1 className="text-xl font-bold mb-4">
        Account: {account.accountID} - {accountType.accountName}
      </h1>
      <p className="text-2xl text-westpac-red mb-4">
        Balance: $ {account.balance?.toFixed(2)}
      </p>

      <TransactionList accountID={accountID} transactions={transactions} />
    </div>
  );
};

export default AccountInformation;
