import React from "react";
import { disableBodyScroll } from "body-scroll-lock";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Image from "./Image";

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
	gap: 1em;
	padding: 1em;
`;

const ImageWrap = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 0;
	padding: 50% 0;
	position: relative;
	&:hover {
		opacity: 1;
		transition: 0.3s;
	}
	background-color: #f4f4f4;
`;

const options = {
	reserveScrollBarGap: true,
};

const Grid = ({ images, setIndex }) => {
	const handleClick = (index) => {
		disableBodyScroll(window.body, options);
		setIndex(index);
	};
	return (
		<StyledGrid id="Grid">
			{images.map((item, index) => {
				return (
					<ImageWrap
						id={index}
						key={`${item} ${index}`}
						onClick={() => handleClick(index)}
					>
						<LazyLoad offset={500} height="100%">
							<Image item={item} />
						</LazyLoad>
					</ImageWrap>
				);
			})}
		</StyledGrid>
	);
};

export default Grid;
