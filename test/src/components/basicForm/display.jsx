const Display=({name,email,age})=>{

    return (
        <div className="">
            <div className="name ">Name: {name}</div>
            <div className="email ">Email: {email}</div>
            <div className="age ">Age: {age}</div>
        </div>
    )
}
export default Display;