import React, { useState, useEffect } from "react";
import Txt from "./list.txt";
import styled from "styled-components";

const Grid = () => {
	const [images, setImages] = useState([]);

	/* Text file from 'dir /b *.jpg > ../../src/components/list.txt' in img folder */

	useEffect(() => {
		fetch(Txt)
			.then((res) => res.text())
			.then((data) => data.trim().split("\n"))
			.then(setImages);
	}, []);

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
		opacity: 0.9;
	`;

	const Image = styled.img`
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	`;

	return (
		<StyledGrid>
			{images.map((item, index) => {
				return (
					<ImageWrap key={`${item} ${index}`}>
						<Image
							src={
								process.env.PUBLIC_URL +
								`/img/${item}?nf_resize=smartcrop&w=200&h=200`
							}
							alt={`${item}`}
						/>
					</ImageWrap>
				);
			})}
		</StyledGrid>
	);
};

export default Grid;
