import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			<ul className="flex gap-5 pr-5">
				<Link to='/'>Home</Link>
				<Link to='/listRender' >ListRender</Link>
				<Link to={'/contact'}>Form</Link>
			</ul>
		</div>
	);
};

export default Navbar;