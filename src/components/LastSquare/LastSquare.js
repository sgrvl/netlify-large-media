import React from "react";
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

const Square = () => {
	return (
		<StyledSquare>
			<a
				href="https://www.instagram.com/nomisgrav/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="instagram link"
			>
				<Insta />
			</a>
			<a
				href="https://github.com/sgrvl/netlify-large-media"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="github link"
			>
				<GitHub />
			</a>
			<div>
				<Arrow onClick={() => window.scrollTo(0, 0)} />
			</div>
		</StyledSquare>
	);
};

export default Square;
