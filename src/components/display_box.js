import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {getFile} from '../actions';

import List from 'react-list-select'

class DisplayBox extends Component {
  constructor(props) {
    super(props)
    this.state = {fileView: false}
  }

  onListSelect(list, number) {
    return function(number) {
      console.log(list[number]);
      this.props.getFile(list[number])
    }
  }

  render() {
    console.log(this.props.lists)
    const renderedLists = this.props.lists.map(list =>
      <div key={list}>
        <p>Please choose one of the following</p>
        <List items={list} onChange={this.onListSelect(list).bind(this)}/>
      </div>
    )

    return (
      <div className="display_box" style={{display: 'flex', justifyContent: 'center'}}>
      {renderedLists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.display.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFile: getFile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBox);
