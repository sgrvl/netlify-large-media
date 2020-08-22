import React from "react";
import { importAll } from "./utils";

const Grid = () => {
	const images = importAll(require.context("../img", false, /jpg$/));

	//const regex = /IMG_\d{4}/g;

	return (
		<div>
			<p>this is a grid</p>
			{Object.entries(images).map((img) => {
				//let found = img[1].match(regex);
				return (
					<img
						style={{ width: "200px", height: "200px", objectFit: "cover" }}
						key={`image ${img[0]}`}
						src={`${img[1]}?nf_resize=smartcrop&w=200&h=200`}
						alt={img[0]}
					/>
				);
			})}
		</div>
	);
};

export default Grid;
