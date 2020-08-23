import React, { useState, useEffect } from "react";
import Txt from "./list.txt";

const Grid = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch(Txt)
			.then((res) => res.text())
			.then((data) => data.trim().split("\n"))
			.then(setImages);
	}, []);

	return (
		<div>
			<p>This is a grid</p>
			<p>This is a test</p>
			{images.map((item, index) => {
				return (
					<img
						key={`${item} ${index}`}
						src={
							process.env.PUBLIC_URL +
							`/img/${item}?nf_resize=smartcrop&w=200&h=200`
						}
						alt={`${item}`}
					/>
				);
			})}
		</div>
	);
};

export default Grid;
