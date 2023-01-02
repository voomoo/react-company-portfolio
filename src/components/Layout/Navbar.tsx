import {Link} from "react-router-dom";
import Styles from "../../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={Styles.Navbar}>
            <Link className={`${Styles.NavBrand} ${Styles.NavLink}`} style={{color: "#FFF", maxHeight: "min-content", margin: 0, padding: 0}} to={"/"}>
                <img src="logo192.png" alt="" width={24} height={24}/>
            </Link>
            <div className={Styles.NavLinkGroup}>
                <Link className={Styles.NavLink} to={"/"}>Home</Link>
                <Link className={Styles.NavLink} to={"/about"}>About</Link>
                <Link className={Styles.NavLink} to={"/services"}>Services</Link>
                <Link className={Styles.NavLink} to={"/portfolio"}>Portfolio</Link>
                <Link className={Styles.NavLink} to={"/contact-us"}>Contact US</Link>
            </div>
        </nav>
    )
}