import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Setup extends Component {
  static propTypes = {
    joke: PropTypes.shape({
      setup: PropTypes.string.isRequired,
    }),
  };

  state = { }

  render() {
    const { joke } = this.props;
    return (
      <div id="setup">
        {joke.setup}
      </div>
    );
  }
}
