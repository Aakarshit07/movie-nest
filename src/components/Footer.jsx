import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-soft-gray shadow-lg shadow-soft-gray mt-12">
        <Link to="/">
        <img className="w-36" src={Logo} alt="Movie Nest" />
        </Link>
        <Link to="/">
        <h1 className="font-mono font-bold">Made with ❤️ by Aakarshit</h1>
        </Link>
    </div>
  )
}

export default Footer;