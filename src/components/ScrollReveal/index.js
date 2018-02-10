import React, { Component } from 'react';
import sr from 'scrollreveal';

class ScrollReveal extends Component {

  componentDidMount() {
    const options = {
      duration: 1000,
      viewFactor: 1,
      mobile: false,
      ...this.props.options
    };
    const { interval } = this.props;
    if (this.props.interval) {
      sr().reveal("."+this.props.reveal, options, interval);
    }
    else {
      sr().reveal(this.refs.reveal, options);
    }
  }

  render() {
    return (
      <div style={this.props.style} ref="reveal" {...this.props}/>
    )
  }
}

export default ScrollReveal;
