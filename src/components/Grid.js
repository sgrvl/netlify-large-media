import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Txt from "./list.txt";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { disableBodyScroll } from "body-scroll-lock";

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`;

const Grid = ({ setSelected }) => {
	const [images, setImages] = useState([]);

	/* Text file from 'dir /b *.jpg > ../../src/components/list.txt' in img folder */

	useEffect(() => {
		fetch(Txt)
			.then((res) => res.text())
			.then((data) => data.trim().split("\n"))
			.then(setImages);
	}, []);

	const handleClick = (item) => {
		disableBodyScroll();
		setSelected(item);
	};

	return (
		<StyledGrid>
			{images.map((item, index) => {
				return (
					<ImageWrap
						//offset={500}
						mobile={isMobile}
						key={`${item} ${index}`}
						onClick={() => handleClick(item)}
					>
						<LazyLoad offset={500} height="100%">
							<Image
								src={
									process.env.PUBLIC_URL +
									`/img/${item}?nf_resize=smartcrop&w=200&h=200`
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
