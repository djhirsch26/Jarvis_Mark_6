import React, { Component } from 'react';
import {connect} from 'react-redux';

import ReactHowler from 'react-howler';

import Timer from '../utils/timer'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      dragStopping: false,
      dragLeft: '0%',
      duration: -1,
      leftEdge: 0,
      barLength: 0,
      position: 0,
      listen_percent: '0%',
      tolisten_percent: '100%',
    }
  }

  componentDidMount() {
    this.setState(
      {leftEdge: this.slider.getBoundingClientRect().x,
        barLength: this.bar.getBoundingClientRect().width
    })
  }

  onClickPlay() {
    this.setState({playing: true})
    this.pause.focus();
  }

  onSongLoad() {
    this.setState(
      {
        duration: parseInt(this.player.duration(),10),
        position: 0,
        listen_percent: '0%',
        tolisten_percent: '100%',
      });
    const slider = this.slider;
  }

  clientPostoSongPos(clientX) {
    let modded = (clientX-this.state.leftEdge)/(this.state.barLength)
    if (modded < 0) {
      modded = 0
    }
    if (modded > 1) {
      modded = 1
    }
    return modded*this.state.duration
  }

  onDragStart(e) {
    var canvas = document.createElementNS("../../../style/transparent.png","canvas");
    e.dataTransfer.setDragImage(canvas,0,0)
    // e.dataTransfer.setData("Text","Woa");
    if(this.state.playing) {
    this.setState({playing: false, dragStopping: true})
  }
  }

  onDrag(e) {
    if (e.clientX != 0) {
    let pos = this.clientPostoSongPos(e.clientX)
    let length = this.state.duration
    this.setState({
      position: pos,
      dragLeft: ((pos/length)*100+'%'),
      listen_percent: ((pos/length)*100+'%'),
      tolisten_percent: ((100-(pos/length)*100)+'%'),
    })
  }
}

  onDragLeave(e) {
    console.log("leave")
  }

  onDragEnd(e) {
    if(this.state.dragStopping){
    this.setState({playing: true, dragStopping: false})
  }
  this.player.seek(this.state.position)
  }

  onDrop(e) {
    // this.player.seek(this.state.position)
  }

  onClickPause() {
    this.setState({playing: false})
    this.play.focus()
  }

  timerRender(elapsed) {
    return(
      <div/>
    );
  }

  timerCallback() {
    const player= this.player;
    if(this.state.playing || this.state.dragStopping) {
      var current_pos = player.seek();
      var length = this.state.duration;
      this.setState({
        position: current_pos,
         dragLeft: ((current_pos/length)*100+'%'),
         listen_percent: ((current_pos/length)*100+'%'),
         tolisten_percent: ((100-(current_pos/length)*100)+'%'),
       })
    }
  }

  render() {
    return(
      <div className="audio_wrapper">
      <ReactHowler
          src='http://localhost:3000/dummy/music'
          playing={this.state.playing}
          format={['mp3']}
          ref={(ref) => (this.player = ref)}
          onLoad={this.onSongLoad.bind(this)}
      />
      <div>
      {(this.state.duration == -1) ? <div/> : <Timer
      duration={this.state.duration}
      render={this.timerRender.bind(this)}
      callback={this.timerCallback.bind(this)}
      />}
      <div className="bar_wrapper">

      <div className="box"
      onDragOver={(e) => {e.preventDefault()}}
      onDrop={this.onDrop.bind(this)}
      ref={(ref) => (this.bar = ref)}>
      <div className="listened" style={{width: this.state.listen_percent}}/>
      <div className="tolisten" style={{marginLeft: this.state.listen_percent, width: this.state.tolisten_percent}}/>
      </div>


      <div className="cursor_wrapper">
      <div className="circle"
      draggable={true}
      onDrag = {this.onDrag.bind(this)}
      onDragStart = {this.onDragStart.bind(this)}
      onDragEnd = {this.onDragEnd.bind(this)}
      ref={(ref) => (this.slider = ref)}
      style={{marginLeft: this.state.dragLeft}}>
      </div>

      </div>
      </div>
      <div className="button_wrapper">
      <button onClick={this.onClickPlay.bind(this)} ref={(ref) => (this.play = ref)}>Play</button>
      <button onClick={this.onClickPause.bind(this)} ref={(ref) => (this.pause = ref)}>Pause</button>
      </div>
      </div>
      </div>
    );
  }
}
