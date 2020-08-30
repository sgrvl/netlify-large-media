import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";
import KeyHandler, { KEYDOWN } from "react-key-handler";
import { isMobile } from "react-device-detect";

const StyledModal = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);

	justify-content: center;
	align-items: center;
	z-index: 2;

	display: flex;
	opacity: 100;
`;

const Image = styled(motion.img)`
	display: block;
	max-width: 97%;
	max-height: 97%;
	margin: 60px auto;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
	/* transform: translateX(${(props) => props.move}); */
`;

const Modal = ({ image, index, setIndex, max }) => {
	const [direction, setDirection] = useState(0);

	const handleClick = (e) => {
		if (e.target.tagName === "DIV" || e.target.tagName === "IMG") {
			setIndex(null);
			setDirection(0);
			setTimeout(() => {
				enableBodyScroll();
			}, 350);
		}
	};

	useEffect(() => {
		if (index < 0 || index > max) {
			setIndex(null);
			enableBodyScroll();
		}
	}, [max, index, setIndex]);

	const handleDirection = (d) => {
		if (d) {
			setDirection(window.innerWidth / 2);
			setIndex(index + 1);
		} else {
			setDirection(-window.innerWidth / 2);
			setIndex(index - 1);
		}
	};

	return (
		<>
			<KeyHandler
				keyEventName={KEYDOWN}
				code="ArrowRight"
				onKeyHandle={() => handleDirection(true)}
			/>
			<KeyHandler
				keyEventName={KEYDOWN}
				code="ArrowLeft"
				onKeyHandle={() => handleDirection(false)}
			/>
			<AnimatePresence type="crossfade">
				{image && (
					<StyledModal
						onClick={(e) => handleClick(e)}
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
					>
						{!isMobile && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="125"
								height="125"
								viewBox="0 0 24 24"
								fill="none"
								stroke="White"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<motion.polyline
									style={{ cursor: "pointer" }}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.8 }}
									onTap={() => handleDirection(false)}
									points="15 18 9 12 15 6"
								></motion.polyline>
							</svg>
						)}
						<Image
							layout
							initial={{ x: direction, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							key={image}
							src={process.env.PUBLIC_URL + `/img/${image}`}
							alt={image}
						/>

						{!isMobile && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="125"
								height="125"
								viewBox="0 0 24 24"
								fill="none"
								stroke="White"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<motion.polyline
									style={{ cursor: "pointer" }}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.8 }}
									onTap={() => handleDirection(true)}
									points="9 18 15 12 9 6"
								></motion.polyline>
							</svg>
						)}
					</StyledModal>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
