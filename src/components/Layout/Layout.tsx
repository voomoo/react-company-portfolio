import {Layout as AntLayout} from "antd";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const {Header, Footer, Content} = AntLayout;

export default function Layout() {
    return (
        <AntLayout>
            <Header style={{background: "white"}}>
                <Navbar/>
                <NavbarMobile/>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>Footer</Footer>
        </AntLayout>
    )
}