import React from "react";
import styled from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";

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
	max-width: 98%;
	max-height: 98%;
	margin: 60px auto;
	box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

const Modal = ({ selected, setSelected }) => {
	const handleClick = (e) => {
		if (e.target.tagName === "DIV") {
			setSelected("");
			enableBodyScroll();
		}
	};

	return (
		<div>
			{selected && (
				<StyledModal onClick={handleClick}>
					<Image
						src={process.env.PUBLIC_URL + `/img/${selected}`}
						alt={selected}
					/>
				</StyledModal>
			)}
		</div>
	);
};

export default Modal;
