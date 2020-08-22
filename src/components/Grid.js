import React from "react";
import { importAll } from "./utils";

const Grid = () => {
	const images = importAll(
		require.context(process.env.PUBLIC_URL, true, /jpg$/)
	);

	return (
		<div>
			<p>This is a grid</p>
			{Object.entries(images).map((img) => {
				return (
					<img
						style={{ width: "200px", height: "200px", objectFit: "cover" }}
						key={`image ${img[0]}`}
						src={`${img[1]}?nf_resize=smartcrop&w=200&h=200`}
						alt={img[0]}
					/>
				);
			})}
			{/* <p>This is a test</p>
			<img src={process.env.PUBLIC_URL + "/img/IMG_0100.jpg"} alt="test" /> */}
		</div>
	);
};

export default Grid;
