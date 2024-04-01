const Card = (props) => {
	return (
		<>
			<div className="card border border-black rounded-md m-2 p-2">
				<h1>{props.title}</h1>
			</div>
		</>
	);
};

export default Card;
