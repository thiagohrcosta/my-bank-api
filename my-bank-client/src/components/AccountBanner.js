import './AccountBanner.css';

const AccountBanner = (props) => {
  return(
    <div className="bank-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <div className="container-align">
              <h1 className="banner-title">The <span className="banner-highlight">lowest</span> taxes on market</h1>
              <h3 className="banner-subtitle">Create your account right now and start to control your finances</h3>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-banner" src="../../img/main.svg" alt=""/>
          </div>
        </div>

      </div>

      <div className="bank-info">
        <div className="container">
          <div className="bank-card-container">
            <div className="bank-card">
              <h3 className="bank-card-header">Money dealt by this bank</h3>
              <h3 className="bank-card-footer">$ 32.000.000.00</h3>
            </div>
            <div className="bank-card">
              <h3 className="bank-card-header">Total of clients</h3>
              <h3 className="bank-card-footer">152</h3>
            </div>
            <div className="bank-card">
              <h3 className="bank-card-header">Transfers today</h3>
              <h3 className="bank-card-footer">+ $1.350.000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AccountBanner;