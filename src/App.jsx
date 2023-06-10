import { Button } from "@mui/material";
import React from "react";
import Preloader from "./assets/utilities/Preloader";

function App() {
	return (
		<React.Fragment>
			<div className="p-4">
				<span>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sunt culpa repudiandae ad molestiae placeat ducimus neque
					eligendi, veritatis consectetur quo cum nemo laboriosam magni dicta quae fugit. Voluptatum, earum?
				</span>
				<br />
				<div className="mt-5">
					<Button variant="outlined" className="bg-red-300">
						Okeleye Victor Olamide
					</Button>
				</div>
				<Preloader />
			</div>
		</React.Fragment>
	);
}

export default App;
