import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import List from 'react-list-select'
import FileViewer from 'react-file-viewer';

import {FS_URL} from '../constance';
import {
  setFile,
  closeFileView,
} from '../actions';


const path = require('path');

class DisplayBox extends Component {
  constructor(props) {
    super(props)
  }

  onListSelect(list, command, number) {
    return function(number) {
      switch(command) {
        default:
        //this.props.closeFileView()
        // console.log(list[number]);
        this.props.setFile(number)
      }
    }
  }

  onError() {

  }

  onCloseClick() {
    console.log("HERE")
    this.props.closeFileView()
  }

  render() {
    //LC = list_command
    const renderedLists = this.props.lists.map(lc =>
      <div key={lc.list}>
        <p>Please choose one of the following</p>
        <List items={lc.list} onChange={this.onListSelect(lc.list, lc.command).bind(this)}/>
      </div>
    )

    const file = FS_URL + this.props.files[this.props.file_index];
    const type = path.extname(file).substr(1)
    const fileviewer = this.props.fileView ?
    <div>
      <button onClick={this.onCloseClick.bind(this)}>Close_File</button>
      <FileViewer
        fileType={type}
        filePath={file}
        onError={this.onError.bind(this)}
        errorComponent={<div>NOPE</div>}
        ref={(n) => this.fref=n}
      />
    </div>
    : <div>NOPE</div>;

      console.log('h',fileviewer)
    return (
      <div className="display_box">
        {renderedLists}
        {fileviewer}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.display.lists,
    fileView: state.file.fileView,
    files: state.file.files,
    file_index: state.file.file_index
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFile: setFile,
    closeFileView: closeFileView,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBox);
