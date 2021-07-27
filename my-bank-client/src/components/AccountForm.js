import React, { useState } from 'react';
import api from "../services/api";

const AccountForm = (props) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);

  const submitHandler = async (event) => {
    event.preventDefault();

    const newAccount = {
      number: accountNumber,
      full_name: accountName,
      balance: accountBalance
    };

    setAccountNumber("");
    setAccountName("");
    setAccountBalance(0);

    const response = await api.post("accounts", newAccount);
    props.fetchData();

  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="">
          <div className="">
            <label>Number</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(event) => setAccountNumber(event.target.value)}
            />
          </div>
          <div className="">
            <label>Full Name</label>
            <input
              type="text"
              value={accountName}
              onChange={(event) => setAccountName(event.target.value)}
            />
          </div>
          <div className="">
            <label>Balance</label>
            <input
              type="number"
              value={accountBalance}
              onChange={(event) => setAccountBalance(event.target.value)}
            />
          </div>
        </div>
        <div className="">
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;