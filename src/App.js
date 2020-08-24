import React, { useState } from "react";
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
	const [selected, setSelected] = useState("");

	return (
		<>
			<Modal selected={selected} setSelected={setSelected} />
			<Grid setSelected={setSelected} />
			<GlobalStyle />
		</>
	);
};

export default App;
