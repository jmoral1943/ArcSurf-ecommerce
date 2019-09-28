import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./assets/styles/styles.scss";
import Cart from "./components/Cart";
import reducer from "./store/reducer";
import ForgotPassword from "./components/Forgotpassword";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Signin_Signup from "./components/Signin_Signup";
import Signingup from "./components/Signingup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Shipping from "./components/Payment/Shipping";
import Billing from "./components/Payment/Billing";
import OrderOverview from "./components/Payment/OrderOverview";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Payment = ({ match }) => (
  <div>
    {/* <Link to={`${match.url}/shipping`}>
   shipping
 </Link>
 <Link to={`${match.url}/billing`}>
   billing
 </Link>
 <Link to={`${match.url}/overview`}>
   overview
 </Link> */}
    <Route path={`${match.url}/shipping`} component={Shipping} />
    <Route path={`${match.url}/billing`} component={Billing} />
    <Route path={`${match.url}/overview`} component={OrderOverview} />
  </div>
);

const Routing = () => (
  <Router>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Route path="/payments" component={Payment} />
      {
        <React.Fragment>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Signin_Signup} />
            <Route path="/signup" component={Signingup} />
            <Route path="/cart" component={Cart} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/termsofuse" component={TermsOfUse} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </main>
          <Footer />
        </React.Fragment>
      }
    </Switch>
  </Router>
);

ReactDOM.render(<Routing />, document.getElementById("root"));
