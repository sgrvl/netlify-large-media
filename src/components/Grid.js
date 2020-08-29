import React from "react";
import { isMobile } from "react-device-detect";
import { disableBodyScroll } from "body-scroll-lock";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
	gap: 1em;
	margin: 1em;
`;

const ImageWrap = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 0;
	padding: 50% 0;
	position: relative;
	opacity: ${(props) => (props.mobile ? "1" : "0.9")};
	&:hover {
		opacity: 1;
		transition: 0.3s;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	max-width: 400px;
	max-height: 400px;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
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
		<StyledGrid>
			{images.map((item, index) => {
				return (
					<ImageWrap
						//offset={500}
						mobile={isMobile}
						key={`${item} ${index}`}
						onClick={() => handleClick(index)}
					>
						<LazyLoad offset={500} height="100%">
							<Image
								src={
									process.env.PUBLIC_URL +
									`/img/${item}?nf_resize=smartcrop&w=400&h=400`
								}
								alt={`${item}`}
							/>
						</LazyLoad>
					</ImageWrap>
				);
			})}
		</StyledGrid>
	);
};

export default Grid;
