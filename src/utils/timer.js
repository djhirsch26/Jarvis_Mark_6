import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: props.duration,
      render: props.render,
      callback: props.callback
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 1) {
      clearInterval(this.interval);
    }
    this.state.callback();
  }

  render() {
    return (
      <div>
      {this.state.render(this.state.secondsRemaining)}
      </div>
    );
  }
}

const propTypes = {
  render: PropTypes.func,
  callback: PropTypes.func,
};

export default Timer;
