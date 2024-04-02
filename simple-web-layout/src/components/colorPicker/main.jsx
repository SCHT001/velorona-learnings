import { useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("#000000");
	return (
		<>
			<h1>Color Picker</h1>
            <h2>Current Color: {color}</h2>
			<input
				type="color"
				onChange={(e) => {
					setColor(e.target.value);
				}}
			/>
		</>
	);
};
export default ColorPicker;
