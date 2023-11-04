export const SAVINGS_DATA = {
  currentBalance: 6500.45,
  balanceLastWeek: 6200.3,
};

// Mock data
export const mockAccountTypes = [
  {
    accountTypeID: 1,
    accountName: "Everyday Saver",
  },
  {
    accountTypeID: 2,
    accountName: "High Interest eSaver",
  },
  {
    accountTypeID: 3,
    accountName: "Term Deposit",
  },
];

export const mockAccounts = [
  {
    accountID: "ACC0010",
    accountTypeID: 2,
    balance: SAVINGS_DATA.currentBalance,
  },
  {
    accountID: "ACC0015",
    accountTypeID: 3,
    balance: 10000,
  },
];

export const mockTransactions = [
  {
    recordID: "TRX0100021",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Ampol Petrol",
    trxAmount: -24.66,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100029",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Coffee Shop",
    trxAmount: -9.27,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100031",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Woolworths",
    trxAmount: -86.42,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100032",
    trxDate: "2023-02-23T00:00:00.000+00:00",
    trxDescription: "Coles",
    trxAmount: -86.42,
    accountID: "ACC0015",
  },
  {
    recordID: "TRX0100021",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Payment From Bob",
    trxAmount: +4.66,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100029",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Coffee Shop",
    trxAmount: -2.27,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100031",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Woolworths",
    trxAmount: -86.42,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100031",
    trxDate: "2023-02-22T00:00:00.000+00:00",
    trxDescription: "Coles",
    trxAmount: -86.42,
    accountID: "ACC0015",
  },
  {
    recordID: "TRX0100042",
    trxDate: "2023-03-20T00:00:00.000+00:00",
    trxDescription: "Netflix Subscription",
    trxAmount: -13.99,
    accountID: "ACC0010",
  },

  {
    recordID: "TRX0100043",
    trxDate: "2023-03-22T00:00:00.000+00:00",
    trxDescription: "Grocery Store",
    trxAmount: -95.27,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100047",
    trxDate: "2023-03-20T00:00:00.000+00:00",
    trxDescription: "Avocado Toast",
    trxAmount: -20.99,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100021",
    trxDate: "2023-03-20T00:00:00.000+00:00",
    trxDescription: "Payment from Bucky",
    trxAmount: +23.69,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100022",
    trxDate: "2023-03-20T00:00:00.000+00:00",
    trxDescription: "Avocado Toast",
    trxAmount: -20.99,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100044",
    trxDate: "2023-03-23T00:00:00.000+00:00",
    trxDescription: "Mobile Phone Bill",
    trxAmount: -45.0,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100045",
    trxDate: "2023-03-25T00:00:00.000+00:00",
    trxDescription: "Public Transport",
    trxAmount: -18.5,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100046",
    trxDate: "2023-03-26T00:00:00.000+00:00",
    trxDescription: "Pharmacy",
    trxAmount: -22.8,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100047",
    trxDate: "2023-03-20T00:00:00.000+00:00",
    trxDescription: "Payslip",
    trxAmount: +2431.99,
    accountID: "ACC0010",
  },
  {
    recordID: "TRX0100047",
    trxDate: "2023-03-19T00:00:00.000+00:00",
    trxDescription: "Avocado Toast",
    trxAmount: -20.99,
    accountID: "ACC0010",
  },
];

export const mockBuckysAdvice =
  "Bucky says: Keep up the good work saving! Remember, every little bit helps.";

export const mockSavingsInfo = {
  accounts: [
    {
      accountID: "ACC0010",
      customerID: "L00010",
      accountTypeID: 2, // Type of account that the user has, mapped with accountTypes
      empty: false,
    },
    {
      accountID: "ACC0015",
      customerID: "L00010",
      accountTypeID: 3,
      empty: false,
    },
  ],
  transactions: [mockTransactions],
  SAVINGS_DATA,
  accountTypes: [
    {
      accountTypeID: 1,
      accountName: "Everyday Saver",
    },

    {
      accountTypeID: 2,
      accountName: "High Interest eSaver",
    },
  ],
  savingsGoalAmount: 25000,
};
