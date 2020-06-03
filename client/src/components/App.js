import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

// pages for this product
import HomePage from "./views/HomePage/HomePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import TVShowDetails from "./views/TVShowDetails/TVShowDetails";
import FavoriteShows from "./views/FavoriteShows/FavoriteShows";
require('dotenv').config();

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '70px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/tv/:tvShowID" component={Auth(TVShowDetails, null)} />
          <Route exact path="/favoriteshows" component={Auth(FavoriteShows, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
