const Card = (props) => {
	return (
		<>
            
			<div className={`card border border-black rounded-md m-2 p-2 flex justify-between ${props.completed?"bg-green-500":"bg-red-500"}`} >
				<h1>{props.title}</h1>
                <div>{props.completed ? "completed ": "Incomplete"}</div>
                
			</div>
		</>
	);
};

export default Card;
