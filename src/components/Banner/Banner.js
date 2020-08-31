import React from "react";
import styled from "styled-components";
import Desktop from "./Desktop.webp";
import Mobile from "./Mobile.webp";

const BannerWrap = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const Title = styled.h1`
	position: absolute;
	color: white;
`;

const Button = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const StyledBanner = styled.img`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	background-image: url(${Desktop});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	@media screen and (max-width: 768px) {
		background-image: url(${Mobile});
	}
`;

const Banner = () => {
	return (
		<BannerWrap>
			<Title>simon gravel</Title>
			<Button onClick={() => document.getElementById("Grid").scrollIntoView()}>
				test
			</Button>
			<StyledBanner />
		</BannerWrap>
	);
};

export default Banner;
