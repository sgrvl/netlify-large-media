import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";
import KeyHandler, { KEYDOWN } from "react-key-handler";

const StyledModal = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 3;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Image = styled(motion.img)`
	display: block;
	max-width: 97%;
	max-height: 97%;
	margin: 60px auto;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

const Modal = ({ image, index, setIndex, max, isMobile }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleClick = (e) => {
		if (e.target.tagName === "DIV" || e.target.tagName === "IMG") {
			setIndex(null);
			setTimeout(() => {
				enableBodyScroll();
			}, 350);
			const target = document.getElementById(index);
			const value = target.getBoundingClientRect().top;
			const threshold = window.innerHeight - target.offsetHeight;
			if (value > threshold || value < 0) {
				target.scrollIntoView();
			}
		}
	};

	useEffect(() => {
		if (index < 0 || index > max) {
			setIndex(null);
			enableBodyScroll();
		}
	}, [max, index, setIndex]);

	useEffect(() => {
		setIsLoaded(false);
	}, [index]);

	return (
		<>
			<KeyHandler
				keyEventName={KEYDOWN}
				code="ArrowRight"
				onKeyHandle={() => setIndex(index + 1)}
			/>
			<KeyHandler
				keyEventName={KEYDOWN}
				code="ArrowLeft"
				onKeyHandle={() => setIndex(index - 1)}
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
							<motion.svg
								style={{
									cursor: "pointer",
									originX: "50%",
									originY: "50%",
									minWidth: "min-content",
								}}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								onTap={() => setIndex(index - 1)}
								xmlns="http://www.w3.org/2000/svg"
								width="125"
								height="125"
								viewBox="0 0 24 24"
								fill="none"
								stroke="White"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="15 18 9 12 15 6"></polyline>
							</motion.svg>
						)}
						<Image
							onLoad={() => setIsLoaded(true)}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: isLoaded ? 1 : 0 }}
							key={image}
							src={process.env.PUBLIC_URL + `/img/${image}`}
							alt={image}
						/>
						{!isMobile && (
							<motion.svg
								style={{
									cursor: "pointer",
									originX: "50%",
									originY: "50%",
									minWidth: "min-content",
								}}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								onTap={() => setIndex(index + 1)}
								xmlns="http://www.w3.org/2000/svg"
								width="125"
								height="125"
								viewBox="0 0 24 24"
								fill="none"
								stroke="White"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="9 18 15 12 9 6"></polyline>
							</motion.svg>
						)}
					</StyledModal>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
