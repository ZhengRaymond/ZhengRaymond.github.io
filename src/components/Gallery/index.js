import React, { Component, useState, useCallback } from "react";
import { render } from "react-dom";
import styled, { keyframes } from 'styled-components';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class MyGallery extends Component {
  constructor(props) {
    super(props);
		this.state = {
			"currentImage": 0,
			"viewerIsOpen": false,
		}
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

	openLightbox(event, { photo, index }) {
		this.setState({ ...this.state, "currentImage": index, "viewerIsOpen": true })
	}

	closeLightbox() {
		this.setState({ ...this.state, "currentImage": 0, "viewerIsOpen": false })
	}

  render() {
		return (
		    <Container>
		      <Gallery photos={this.props.data} onClick={this.openLightbox} />
		      <ModalGateway>
		        {this.state.viewerIsOpen ? (
		          <Modal onClose={this.closeLightbox} style={{ "max-height": "60vh"}}>
		            <Carousel
		              currentIndex={this.state.currentImage}
		              views={this.props.data.map(x => ({
		                ...x,
		                srcset: x.srcSet,
		                caption: x.title
		              }))}
		            />
		          </Modal>
		        ) : null}
		      </ModalGateway>
		    </Container>
		)
		// return ( <div> hello </div> )
	}
}


const Container = styled.div`
`
// const Container = styled.div`
// & img:hover {
// 	& img::before, & img::after {
// 		width: 100%;
// 		height: 100%;
// 	}
// 	& img::before {
// 		border-top-color: black;
// 		border-right-color: black;
// 		transition: width 0.15s ease-out, height 0.15s ease-out 0.15s, border-color 0.2s;
// 	}
// 	& img::after {
// 		border-bottom-color: black;
// 		border-left-color: black;
// 		transition: width 0.15s ease-out, height 0.15s ease-out 0.15s, border-color 0.2s;
// 	}
// }
//
// & img::before, & img::after {
// 	content: "";
// 	box-sizing: inherit;
// 	position: absolute;
// 	border: solid 2px transparent;
// 	width: 0;
// 	height: 0;
// 	transition: height 0.25s ease-out, width 0.25s ease-out 0.25s, border-color 0.5s;
// }
// & img::before {
// 	top: 0;
// 	left: 0;
// }
// & img::after {
// 	bottom: 0;
// 	right: 0;
// }
// `

export default MyGallery;
