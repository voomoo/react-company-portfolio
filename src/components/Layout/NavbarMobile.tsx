import Styles from "../../styles/Navbar.module.css";
import {Link} from "react-router-dom";
import {RiMenuUnfoldLine, RiMenuFoldLine} from "react-icons/ri";
import {Drawer} from "antd";
import {useState} from "react";

export default function NavbarMobile() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <nav className={Styles.NavbarMobile}>
            <Link className={`${Styles.NavBrand} ${Styles.NavLink}`} style={{color: "#FFF", maxHeight: "min-content", margin: 0, padding: 0}} to={"/"}>
                <img src="logo192.png" alt="" width={24} height={24}/>
            </Link>
            <RiMenuFoldLine size={24} onClick={() => setDrawerOpen(true)}/>
            <Drawer style={{background: "#b0b1ff"}} className={Styles.MobileNavDrawer} title="Brand Name" placement="right" onClose={() => setDrawerOpen(false)} open={drawerOpen} closeIcon={<RiMenuUnfoldLine size={24}/>}>
                <div className={Styles.NavLinkGroupMobile}>
                    <Link className={Styles.NavLink} to={"/"}>Home</Link>
                    <Link className={Styles.NavLink} to={"/about"}>About</Link>
                    <Link className={Styles.NavLink} to={"/services"}>Services</Link>
                    <Link className={Styles.NavLink} to={"/portfolio"}>Portfolio</Link>
                    <Link className={Styles.NavLink} to={"/contact-us"}>Contact US</Link>
                </div>
            </Drawer>
        </nav>
    )
}