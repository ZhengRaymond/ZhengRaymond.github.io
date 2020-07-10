import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// import Gallery from 'react-photo-gallery';

class MyGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		const photos = [
		  {
		    src: 'http://example.com/example/img1.jpg',
		    width: 4,
		    height: 3
		  },
		  {
		    src: 'http://example.com/example/img2.jpg',
		    width: 1,
		    height: 1
		  }
		];
		// return (
		// 	<Gallery photos={photos} />
		// )
		return ( <div> hello </div> )
	}
}

export default MyGallery;
