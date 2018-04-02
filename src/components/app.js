import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPlayer from 'react-player';

import {submitMessage,
      getMessage,
      submitMusic,
      addList} from '../actions';
import {NO_MUSIC} from '../constance';

import TopHeader from './top_header';
import InputBox from './input_box';
import AudioPlayer from './audio_player';
import DisplayBox from './display_box';

import {
  SET_FILE,
  CHOOSE_FILE,
} from '../utils/commands'

class App extends Component {

  constructor(props) {
    super(props);

  }

  getCallback() {
    console.log("We got a message");
  }

/** Recieves a sentBack, which is a message and a payload*/
  submitCallback(data) {
    console.log(data)
    var {payload} = data
    if (payload) {
      switch(data.command) {
        case CHOOSE_FILE:
          this.props.addList(payload, SET_FILE)
          break;
        default:
          break;
      }
    }
  }

  musicCallback(data) {

  }

  onSubmit() {
    //"/Users/daniel/Documents/Songs/Avicii -  Wake me up (Radio Edit).mp3"
    //"/Users/daniel/Documents/Jarvis/Jarvis_Mark_6/fileserver/files/demofile.txt"
    var toSend =
    {
    	"name": "Daniel",
      "message": this.props.current_input,
    	"file_name": "/Users/daniel/Documents/Jarvis/Jarvis_Mark_6/fileserver/files/demofile.txt"
    }
    //this.props.submitMusic(toSend, this.musicCallback.bind(this))
    this.props.submitMessage(toSend, this.submitCallback.bind(this));
    // this.props.getMessage("this.getCallback");
  }

//https://www.youtube.com/watch?v=8IdBJ7C1eus&t=206s
// <ReactPlayer url='http://localhost:3000/dummy/music'/>

  render() {
    return (
    <div>
      <div className="main_page">
        <TopHeader/>
      </div>
      <div>
        <div className="main_content">
        <InputBox placeholder="ROAR"/>
        <button
        onClick= {this.onSubmit.bind(this)}
        >SEND IT</button>
        <h3 style={{textAlign: 'center'}}>{this.props.message}</h3>
        <div style={{marginLeft: '25%', width: '50%'}}>
          <AudioPlayer/>
        </div>
        <DisplayBox/>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_input: state.input.current_input,
    message: state.input.message,
    music: state.input.music,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitMessage: submitMessage,
    getMessage: getMessage,
    submitMusic: submitMusic,
    addList: addList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
