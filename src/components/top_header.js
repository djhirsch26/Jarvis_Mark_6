import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class TopHeader extends Component {
  render() {
    return (
        <h1 className="top_header">
        Dummy Header
        </h1>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(RideRequest);
