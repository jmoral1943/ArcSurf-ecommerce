import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import AdminDashboard from "./AdminDashboard";

const Admin = props => {

  return (
    <>
      {props.currentUser ? (
        <Route path="/admin" component={AdminDashboard} />
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Admin);
