import React, { Component } from "react";
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';

import { NavLink } from "react-router-dom";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

class AppDrawer extends Component {

  render() {
    return (
      <div>

        <Drawer open={this.props.open} onClose={() => this.props.onClose()}>
          <div
            tabIndex={0}
            role="button"
          >
            <List>
              {this.props.items.map(item => {
                return (
                  <NavLink onClick={() => this.props.onClose()} className="drawerLink" key={item.link} to={item.link} activeStyle={this.props.activeStyle} >

                    <ListItem button>
                      {item.icon ? (
                        <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
                      ) : (
                          ""
                        )}
                      <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>

          </div>
        </Drawer>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  items: PropTypes.array,
  activeStyle: PropTypes.object
};


export default AppDrawer;
