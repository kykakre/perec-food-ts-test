import React from 'react';
import style from "./Footer.module.scss"
import logo from "../../assets/logoWhite.png"
import phone from "../../assets/phone.svg"
import layer from "../../assets/Layer.svg"
import vk from "../../assets/vk.svg"
import tg from "../../assets/tg.svg"
import inst from "../../assets/inst.svg"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.content}>
                <img src={logo} className={style.logo}/>
                <div>
                    <a className={style.link} href={"https://instagram.com/perec.food64?igshid=ZDdkNTZiNTM="}>
                        <img className={style.icon} src={inst}/>
                        <div className={style.text}>Инстаграмм</div>
                    </a>
                    <a className={style.link} href={"https://t.me/+ETt2YClXHgMzNmYy"}>
                        <img className={style.icon} src={tg}/>
                        <div className={style.text}>Телеграм</div>
                    </a>
                    <a className={style.link} href={"https://vk.com/perec_loundge"}>
                        <img className={style.icon} src={vk}/>
                        <div className={style.text}>Вконтакте</div>
                    </a>
                </div>
                <div>
                    <a className={style.link} href={"tel:+79271221343"}>
                        <img className={style.icon} src={phone}/>
                        <div className={style.text}>+7(927)122-13-43</div>
                    </a>
                    <div className={style.link}>
                        <img className={style.icon} src={layer}/>
                        <div className={style.text}>Советская 86/70</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;