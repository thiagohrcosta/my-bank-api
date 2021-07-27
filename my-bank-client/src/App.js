import { useEffect, useState } from "react";
import api from "./services/api";

import "./App.css";
import Accounts from "./components/accounts";
import AccountForm from "./components/AccountForm";
import AccountNavbar from "./components/AccountNavbar";
import AccountBanner from "./components/AccountBanner";

function App() {
  
  async function fetchData() {
    const response = await api.get("accounts");
    setAccounts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);


  const [accounts, setAccounts] = useState([]);

  return (
    
    <div className="App">
      <AccountNavbar />
      <AccountBanner />
      <header className="App-header pt-5">
        <AccountForm fetchData={fetchData} />
        <Accounts accounts={accounts} />
      </header>
    </div>
  );
}

export default App;
