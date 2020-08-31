import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow-up-circle.svg";
import { ReactComponent as Insta } from "./instagram.svg";
import { ReactComponent as GitHub } from "./github.svg";

const StyledSquare = styled.div`
	width: 100%;
	height: 0;
	padding: 50% 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	svg {
		transform: scale(2);
		pointer-events: auto;
		cursor: pointer;
		margin: 2em;
	}
	a {
		height: fit-content;
		color: black;
	}
`;

const BackWrap = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
`;

const Back = styled.div`
	position: absolute;
	z-index: 2;
	width: 100%;
	background-color: white;
	color: black;
	font-size: 1.2em;
	opacity: ${(props) => (props.show ? 1 : 0)};
	transition: opacity 0.3s ease-out;
`;

const Square = ({ isMobile }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<StyledSquare>
			<a
				href="https://www.instagram.com/nomisgrav/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Insta />
			</a>
			<a
				href="https://github.com/sgrvl/netlify-large-media"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHub />
			</a>
			<BackWrap
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{!isMobile && <Back show={isHover}>TOP</Back>}
				<Arrow onClick={() => window.scrollTo(0, 0)} />
			</BackWrap>
		</StyledSquare>
	);
};

export default Square;
