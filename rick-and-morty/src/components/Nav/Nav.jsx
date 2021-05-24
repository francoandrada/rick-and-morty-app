import React from "react"
import { NavLink } from 'react-router-dom';

import styles from "./Nav.module.css"
import navLogo from '../../assets/img/rick-and-morty-logo.png'

import About from "../About/About"

export default function Nav(){
    return(
            <div className={styles.navContainer}>
                <div className={styles.iContainer}>
                    <img className={styles.navLogo} src={navLogo} alt="" srcset="" />
                </div>
                <div className={styles.navbarContainer}>
                    <ul className={styles.navbar}>
                        <NavLink  to="/">                 
                            <li className={styles.navbarItem}>
                               <span className={styles.itemText}>Inicio</span>
                            </li>    
                        </NavLink>
                        <NavLink to="/favoritos">
                            <li className={styles.navbarItem}>
                               <span className={styles.itemText}>Favoritos</span>
                            </li>  
                        </NavLink>
                        <NavLink to="/about">    
                            <li className={styles.navbarItem}>
                                <span className={styles.itemText}>About</span>
                            </li>
                        </NavLink>

                    </ul>

                </div>
            </div>
        )
}


