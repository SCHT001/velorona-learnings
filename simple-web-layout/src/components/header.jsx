import Navbar from "./navbar";
const Header = () => {
  return (
    <div className="border border-black flex justify-between">
        <div className="logo">LOGO</div>
        <Navbar></Navbar>
    </div>
  );
}
export default Header;