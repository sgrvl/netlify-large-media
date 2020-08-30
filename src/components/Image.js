import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledImage = styled(motion.img)`
	height: 100%;
	width: 100%;
	max-width: 400px;
	max-height: 400px;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`;

const Image = ({ item }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<StyledImage
			onLoad={() => setIsLoaded(true)}
			animate={{ opacity: isLoaded ? 1 : 0 }}
			src={
				process.env.PUBLIC_URL + `/img/${item}?nf_resize=smartcrop&w=400&h=400`
			}
			alt={`${item}`}
		/>
	);
};

export default Image;
