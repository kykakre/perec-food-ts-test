import React from 'react';
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {

    return (
        <div className={style.header}>
            <img src={logo} className={style.logo}/>
        </div>
    );
};

export default Header;