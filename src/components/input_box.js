import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {update_input} from '../actions';


class InputBox extends Component {
  constructor(props) {
    super(props);
		const {placeholder} = props;
		this.state = {
			placeholder: placeholder
		};
		this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.update_input(event.target.value);
  }

  render() {
    return (
      <div className="inputWrapper" style={{display: 'flex', justifyContent: 'center'}}>
      <input
      type="text"
      style= {{width: '100%'}}
      value={this.props.current_input}
      placeholder={this.state.placeholder}
      onChange={this.onChange}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_input: state.input.current_input
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    update_input: update_input
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
