import { useEffect, useState } from "react";
import api from "./services/api";

import "./App.css";
import Accounts from "./components/accounts";
import AccountForm from "./components/AccountForm";
import AccountNavbar from "./components/AccountNavbar";
import AccountBanner from "./components/AccountBanner";
import AccountFooter from "./components/AccountFooter";

function App() {
  
  async function fetchData() {
    const response = await api.get("accounts");
    setAccounts(response.data);
  }

  async function amountBalance(){
    const amountOfBalance = await api.get("accounts");
    const mapAccount = amountOfBalance.data
    
    let sumArray = []

    let accountsBalance = mapAccount.map((amount) => {
      sumArray.push(parseFloat(amount.balance))
    })
    
    let sumTotalBalance = sumArray.reduce(function(a, b){ return a + b}, 0);
    setTotalBalance(sumTotalBalance);
    
  }

  useEffect(() => {
    fetchData();
    amountBalance();
  }, []);


  const [accounts, setAccounts] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  return (
    
    <div className="App">
      <AccountNavbar />
      <AccountBanner />
      <AccountFooter />
      <header className="App-header pt-5">
        <AccountForm fetchData={fetchData} />
        <Accounts accounts={accounts} />
      </header>
    </div>
  );
}

export default App;
