import React, { useState, useEffect } from "react";
import Txt from "./components/list.txt";
import Grid from "./components/Grid";
import { createGlobalStyle } from "styled-components";
import Modal from "./components/Modal";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    user-select: none;
	  -webkit-tap-highlight-color: transparent;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }
`;

const App = () => {
	/* Text file from 'dir /b *.jpg > ../../src/components/list.txt' in img folder */
	const [images, setImages] = useState([]);
	const [index, setIndex] = useState(null);

	useEffect(() => {
		fetch(Txt)
			.then((res) => res.text())
			.then((data) => data.trim().split("\n"))
			.then(setImages);
	}, []);

	useEffect(() => {
		/*Preloading bigger images ~~ test */
		images.map((i) => {
			const test = new Image();
			test.src = process.env.PUBLIC_URL + `/img/${i}`;
			//console.log(test);
			return null;
		});
	}, [images]);

	return (
		<>
			<Modal
				setIndex={setIndex}
				image={images[index]}
				index={index}
				max={images.length - 1}
			/>
			<Grid setIndex={setIndex} images={images} />
			<GlobalStyle />
		</>
	);
};

export default App;
