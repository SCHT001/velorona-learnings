import {useState, useEffect} from 'react';
import Card from '../components/taskCard';
const Body = (props) => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then((response) => response.json())
			.then((data) => {
					setTasks(data);
			});
	}, []);

	return (
		<>
			<div className="flex  flex-col w-full border border-black">
				<div className="">
					<h1>{props.text}</h1>
					{tasks.map((task) => {
						return (
							<Card
								key={task.id}
								title={task.title}
								completed={task.completed}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default Body;