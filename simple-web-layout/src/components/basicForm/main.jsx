import Display from "./display.jsx";
import { useState } from "react";

const Form = () => {

    const handelChange=(e)=>{
        
        e.target.name=='name' && setName(e.target.value);
        e.target.name=='email' && setEmail(e.target.value);
        e.target.name=='age' && setAge(e.target.value);
    }

    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0); 
	return (
		<div className="flex flex-col">
			<form onChange={(e)=>{handelChange(e)}}>
				<label htmlFor="name">
					Name:
					<input type="text" className="border border-black" name="name" />
				</label>
				<label htmlFor="email">
					Email:
					<input type="text" className="border border-black" name="email" />
				</label>
				<label htmlFor="age">
					Age:
					<input type="number" className="border border-black" name="age" />
				</label>
			</form>
			<Display name={name} email={email} age={age}></Display>
		</div>
	);
};

export default Form;