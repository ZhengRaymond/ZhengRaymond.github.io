import React, { Component, useState, useCallback } from "react";
import styled, { keyframes } from 'styled-components';

const Header = styled.div`
	font-family: 'Shadows Into Light', cursive;
	font-size: ${props => props.size || "3em" };
	margin: ${props => props.margin || "20px" };
`

export {
	Header,
}
