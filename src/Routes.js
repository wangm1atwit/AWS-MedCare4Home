import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home/Home";
import NotFound from "./containers/Auth/NotFound";
import Login from "./containers/Auth/Login";
import ResetPassword from "./containers/Auth/ResetPassword";
import Signup from "./containers/Auth/Signup";
import NewDocument from "./containers/Documents/NewDocument";
import Documents from "./containers/Documents/Documents";
import ListDocuments from "./containers/Documents/ListDocuments";
import Symptoms from "./containers/Symptoms/Symptoms";
import NewSymptom from "./containers/Symptoms/NewSymptom";
import Settings from "./containers/Settings/Settings";
import ChangePassword from "./containers/Settings/ChangePassword";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login/reset">
        <ResetPassword />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/documents/new">
        <NewDocument />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/documents">
        <ListDocuments />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/documents/:id">
        <Documents />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute  exact path="/settings/password">
        <ChangePassword />
      </AuthenticatedRoute >
      <AuthenticatedRoute exact path="/symptoms">
        <Symptoms />
      </AuthenticatedRoute>
      <Route exact path="/symptoms/new">
        <NewSymptom />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
