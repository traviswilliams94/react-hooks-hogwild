import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	console.log(hogs);

	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
		</div>
	);

	
}

export default App;
