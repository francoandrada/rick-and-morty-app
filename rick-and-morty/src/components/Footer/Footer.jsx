import React from "react"

import styles from './Footer.module.css'
import { AiFillGithub } from 'react-icons/ai';

    function Footer(){
        return(
            <div className={styles.container}>
                <div className={styles.containerIconGit}>
                    <a href="https://github.com/francoandrada/rick-and-morty-app" target = "_ blank" className={styles.link}><AiFillGithub className={styles.iconGit}/> </a>
                </div>
            </div>
        )
}

export default Footer;