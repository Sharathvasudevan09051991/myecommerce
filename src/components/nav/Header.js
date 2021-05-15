import React from "react";
import { Menu } from "antd";
import { UserAddOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { useState } from "react";
import {Link} from "react-router-dom"

const Header = () => {


    const [current, setcurrent] = useState();

    const {Item} = Menu 

    const handleClick= (e) => {
        console.log(e.key);
        setcurrent(e.key);
        console.log("CURRENT: ", current);

    }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
       <Item key="home" icon={<HomeOutlined />}>
         <Link to="/">Home </Link>
        </Item>
        <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login </Link>
        </Item>
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register </Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Header;
