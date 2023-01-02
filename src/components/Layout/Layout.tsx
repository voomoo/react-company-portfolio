import {Layout as AntLayout} from "antd";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

const {Header, Footer, Content} = AntLayout;

export default function Layout() {
    return (
        <AntLayout>
            <Header style={{background: "white"}}>
                <Navbar/>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>Footer</Footer>
        </AntLayout>
    )
}