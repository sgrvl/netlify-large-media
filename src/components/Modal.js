import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";
import KeyHandler, { KEYDOWN } from "react-key-handler";

const StyledModal = styled.div`
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

const Image = styled.img`
	display: block;
	max-width: 97%;
	max-height: 97%;
	margin: 60px auto;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
	/* transform: translateX(${(props) => props.move}); */
`;

const Modal = ({ image, index, setIndex, max }) => {
	const [dragStart, setDragStart] = useState(null);
	const [dragEnd, setDragEnd] = useState(null);
	const [move, setMove] = useState(0);

	const handleClick = (e) => {
		if (e.target.name !== "BUTTON") {
			setIndex(null);
			enableBodyScroll();
		}
	};

	const handleDragStart = (e) => {
		setMove(0);
		setDragStart(e);
		setDragEnd(null);
	};

	useEffect(() => {
		if (dragStart && dragEnd) setMove(dragEnd - dragStart);
	}, [dragStart, dragEnd, move]);

	useEffect(() => {
		const threshold = window.innerWidth * 0.2;
		if (move > threshold) {
			setIndex(index + 1);
			setMove(0);
			setDragStart(null);
			setDragEnd(null);
		} else if (move < -threshold) {
			setIndex(index - 1);
			setMove(0);
			setDragStart(null);
			setDragEnd(null);
		}
	}, [move, setIndex, index]);

	useEffect(() => {
		if (index < 0 || index > max) {
			setIndex(null);
			enableBodyScroll();
		}
	}, [max, index, setIndex]);

	return (
		<div>
			{image && (
				<StyledModal onClick={handleClick}>
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
					<Image
						src={process.env.PUBLIC_URL + `/img/${image}`}
						alt={image}
						onDragStart={(e) => handleDragStart(e.pageX)}
						onDragEnd={(e) => setDragEnd(e.pageX)}
						onTouchStart={(e) => handleDragStart(-e.touches[0].pageX)}
						onTouchMove={(e) => setDragEnd(-e.touches[0].pageX)}
					/>
				</StyledModal>
			)}
		</div>
	);
};

export default Modal;
