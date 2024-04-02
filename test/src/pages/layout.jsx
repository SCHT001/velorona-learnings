import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Home from "./home.jsx";
import Contact from './contact.jsx';
import ListRender from "./listRender.jsx";
import { Routes,Route } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header></Header>
			<div className="flex">
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/listRender' element={<ListRender/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
            </div>
            <Footer></Footer>
		</>
	);
};
export default Layout;
