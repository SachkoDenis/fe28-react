import React, { useState, FC, ChangeEvent } from "react";

//@ts-ignore
import styles from './Header.module.css';
import UserName from "../UserName/UserName";
import { IconCancel, IconMenu, IconSearch } from "../../Assets/Icons";

const Header = ({onClick, isOpened, input}: any) => {
    return (
        <nav className={styles.navbar} >
            <div className={styles.burgerButton} onClick={onClick}>
                {isOpened ? <IconCancel/> : <IconMenu/>}
            </div>
            {input}
            <div className={styles.search}>
                <IconSearch/>
            </div>
            <div className={styles.user}>
            <UserName title={'Artem Malkin'}/>
            </div>
        </nav>
    )
}
export default Header