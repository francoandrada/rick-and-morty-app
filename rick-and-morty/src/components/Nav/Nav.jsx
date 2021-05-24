import React from "react"
import { NavLink } from 'react-router-dom';

import styles from "./Nav.module.css"


import About from "../About/About"

export default function Nav(){
    return(
            <div className={styles.navContainer}>
                <div className={styles.iContainer}>

                </div>
                <div className={styles.navbarContainer}>
                    <ul className={styles.navbar}>
                        <li className={styles.navbarItem}>
                            <NavLink to="/favoritos">Favoritos</NavLink>
                        </li>                    
                        <li className={styles.navbarItem}>
                            <NavLink to="/about">About</NavLink></li>
                        <li className={styles.navbarItem}>settings</li>
                    </ul>

                </div>
            </div>
        )
}


