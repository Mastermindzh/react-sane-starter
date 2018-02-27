import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeColor} from './../../actions/color-actions.jsx';

class Footer extends Component {
  render() {

    return (
        <footer style={{background: this.props.color, height: "40px", width: "90%", marginTop: "50px"}}>
          I am the footer :)
        </footer>
      );
  }
}

Footer.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func
};

function mapStateToProps(state) {
  return {
    color: state.colorReducer.color
  };
}

export default connect(mapStateToProps, { changeColor
})(Footer);
