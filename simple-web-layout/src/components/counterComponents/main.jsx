import {useState} from 'react';
import Button from './button';

const counterBody = () => {

    const [count, setCount]=useState(1);
    // console.log(count);
	return (
		<>
			<div className='bg-red-500'>
                <h1>Counter: {count}</h1>
                <Button onClick={()=>setCount(count+1)} label='Increment'></Button>
                <Button onClick={()=>setCount(count-1)} label='Decrement'></Button>
            </div>
		</>
	);
};
export default counterBody;