/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Routes from './../constants/routes';
import HomePage from './../containers/home-container.jsx';
import AboutPage from './../containers/about-container.jsx';
import ErrorPage from './../containers/404.jsx';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to={Routes.home} activeStyle={activeStyle}>Home</NavLink>
          <NavLink to={Routes.about} activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path={Routes.home} component={HomePage} />
          <Route path={Routes.about} component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
