import React, { useState, useEffect } from "react";
import Txt from "./components/list.txt";
import { createGlobalStyle } from "styled-components";
//import { isMobile } from "react-device-detect";
import Grid from "./components/Grid";
import Modal from "./components/Modal/Modal";
import { getScrollbarWidth } from "./utils";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
		scroll-behavior: smooth;
		
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
		overflow: ${(props) => (props.scroll ? "auto" : "hidden")};
		padding-right: ${(props) => (props.scroll ? "0" : `${getScrollbarWidth()}px`)}
  }

  ol, ul {
    list-style: none;
  }
`;

const App = () => {
	/* Text file from 'dir /b *.jpg > ../../src/components/list.txt' in img folder */
	const [images, setImages] = useState([]);
	const [index, setIndex] = useState(null);
	const [scroll, setScroll] = useState(true);

	useEffect(() => {
		fetch(Txt)
			.then((res) => res.text())
			.then((data) => data.trim().split("\n"))
			.then(setImages);
	}, []);

	//console.log(`${getScrollbarWidth()}`);

	return (
		<main>
			<Modal
				isSmall={window.innerWidth < 1440}
				setIndex={setIndex}
				image={images[index]}
				index={index}
				max={images.length - 1}
				setScroll={setScroll}
			/>
			<Grid
				setIndex={setIndex}
				images={images}
				isSmall={window.innerWidth < 1440}
				setScroll={setScroll}
			/>
			<GlobalStyle scroll={scroll} />
		</main>
	);
};

export default App;
