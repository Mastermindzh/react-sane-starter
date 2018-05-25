import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeColor } from './../../actions/color-actions/color-actions.jsx';
import PropTypes from "prop-types";
import {Footer} from "./../../components/";
import { getRandomColor } from "./../../utils/colors/colors";
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export class HomePage extends Component {

  render() {

    const { color, changeColor } = this.props;

    return (
      <div>
        <Typography variant="title" gutterBottom>
          React sane starter
      </Typography>
        <Typography variant="body1" gutterBottom>
          Current footer color: {color}
        </Typography>

        <Button variant="raised" color="primary" onClick={() => { changeColor(getRandomColor()) }} >
          Change color
      </Button>
        <Footer color={color} />
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

