import React from "react";
//import test from "./img/IMG_0100.jpg?nf_resize=smartcrop&w=300&h=400";

function App() {
	return (
		<>
			<div className="App">helloworld</div>
			<img src={process.env.PUBLIC_URL + "/img/IMG_0100.jpg"} alt="test" />
		</>
	);
}

export default App;
