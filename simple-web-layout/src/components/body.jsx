import { useEffect,useState } from "react";
import Card from "./taskCard";

const Body = (props) => {
	const [tasks, setTasks] = useState([]);
    // let tasks=[];
    useEffect(() => {
	fetch("https://jsonplaceholder.typicode.com/todos/")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((task) => {
                // console.log(task.id);
                // tasks.push(task);
                setTasks(data);
            });
		});
    }, []);

	return (
		<div className="w-full border border-black">
			<h1>{props.text}</h1>
                {tasks.map((task) => {
                    return <Card key={task.id} title={task.title} />;
                })} 
            {console.log(tasks)}
		</div>
	);
};
export default Body;
