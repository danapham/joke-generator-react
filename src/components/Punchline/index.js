import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Punchline extends Component {
  static propTypes = {
    joke: PropTypes.shape({
      punchline: PropTypes.string.isRequired,
    }),
  };

  state = { }

  render() {
    const { joke } = this.props;
    return (
      <div>
        {joke.punchline}
      </div>
    );
  }
}
