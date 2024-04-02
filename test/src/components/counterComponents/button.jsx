const Button = (props) => {
	return (
		<>
			<button
				onClick={props.onClick}
				className="border border-black bg-green-500 rounded-md p-2"
			>
				{props.label}
			</button>
		</>
	);
};

export default Button;
