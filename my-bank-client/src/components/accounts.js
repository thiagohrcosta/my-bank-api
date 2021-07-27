import "./Accounts.css";

const Accounts = (props) => {
  return (
    <div className="accounts-grid">
      {props.accounts.map((account) => {
        return (
          <div className="accounts-card" key={account.id}>
            <h2>{account.full_name}</h2>
            <h4>$ {account.balance}0</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Accounts;
