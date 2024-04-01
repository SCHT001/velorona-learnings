const Card = (props) => {
	return (
		<>
            
			<div className="card border border-black rounded-md m-2 p-2 flex justify-between " >
				<h1>{props.title}</h1>
                <div>{props.completed ? "completed ": "Incomplete"}</div>
                
			</div>
		</>
	);
};

export default Card;
