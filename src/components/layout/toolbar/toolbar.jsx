import React, { Component } from "react";
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

class NavBar extends Component {

  state = {
    navBarOpen: true
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.props.menuIconOnClick != undefined ? this.props.menuIconOnClick : () => { alert('hello') }}>
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" >
              React-sane-starter
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  menuIconOnClick: PropTypes.func
};


export default NavBar;
