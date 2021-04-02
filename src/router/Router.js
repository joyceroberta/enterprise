import React from "react";
import HomePage from '../screens/homePage/HomePage'
import ApplicationFormPage from "../screens/applicationForm/ApplicationFormPage"
import ListTripsPageAdm from "../screens/listTripPageAdm/ListTripsPageAdm"
import CreateTripPage from "../screens/createTripPage/CreateTripPage"
import TripApprovalPage from "../screens/tripApproval/TripApprovalPage"
import LoginPage from "../screens/loginPage/LoginPage"
import HomeAdmPage from '../screens/admHome/HomePageAdm'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTripsPage from "../screens/listTripPage/ListTripsPage"

function Router(){

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/formulario/:id">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/listaviagens">
            <ListTripsPageAdm />
          </Route>

          <Route exact path="/novasviagens">
            <CreateTripPage />
          </Route>

          <Route exact path="/aprovarinscricoes/:id">
            <TripApprovalPage />
          </Route>

          <Route exact path="/homeadm">
            <HomeAdmPage />
          </Route>

          <Route exact path="/escolherviagem">
            <ListTripsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Router;
