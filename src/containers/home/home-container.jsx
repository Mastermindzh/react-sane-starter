import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeColor } from './../../actions/color-actions/color-actions.jsx';
import PropTypes from "prop-types";
import Footer from "./../../components/layout/footer.jsx";
import {getRandomColor} from "./../../utils/colors/colors";

export class HomePage extends Component {

  render() {

    const { color, changeColor } = this.props;

    return (
      <div>
        <h1>React sane starter</h1>
        Current footer color: {color} <br />
        <input id="changeColor" type="button" onClick={() => { changeColor(getRandomColor()); }} value="Change footer color" />
        <Footer color={color}  />
      </div>
    );
  }
}

HomePage.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func
}

function mapStateToProps(state) {
  return {
    color: state.colorReducer.color
  };
}

export default connect(mapStateToProps, { changeColor })(HomePage);

