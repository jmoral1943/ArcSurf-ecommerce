import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import AdminDashboard from "./AdminDashboard";
import * as actionTypes from "../../store/actions";
import httpClient from "../../httpClient";

const Admin = props => {
  useEffect(() => {
    const user = httpClient.getCurrentUser();
    if (user == null) return;
    props.loadUser(user);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* {props.currentUser && (
        <Route path="/admin" component={AdminDashboard} />
      ) } */}

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

const mapDispatchToProps = dispatch => {
  return {
    loadUser: data => dispatch({ type: actionTypes.LOADUSER, data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
