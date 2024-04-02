import { useEffect, useState } from "react";
import Card from "./taskCard";
import CounterBody from "./counterComponents/main";

// const Body = (props) => {
// 	const [tasks, setTasks] = useState([]);
// 	// let tasks=[];
// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/todos/")
// 			.then((response) => response.json())
// 			.then((data) => {
// 					setTasks(data);
// 			});
// 	}, []);

// 	return (
// 		<>
// 			<div className="flex  flex-col w-full border border-black">
// 				<CounterBody></CounterBody>
// 				<div className="">
// 					<h1>{props.text}</h1>
// 					{tasks.map((task) => {
// 						return (
// 							<Card
// 								key={task.id}
// 								title={task.title}
// 								completed={task.completed}
// 							/>
// 						);
// 					})}
// 					{/* {console.log(tasks)} */}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

import Form from "./basicForm/main";
const Body = (props) => {
    return (
        <Form></Form>
    )
};
export default Body;
