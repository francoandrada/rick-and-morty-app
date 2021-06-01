import React from "react"

import styles from './About.module.css'
import userLogo from '../../assets/img/user.png'
import {SiLinkedin} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {ImGoogle2} from 'react-icons/im'


function About() {
    return (
        <React.Fragment>
            <div className={styles.aboutContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.imgContainer1}>
                        <img className={styles.cardImg} src={userLogo} alt="loading.." srcset="" />
                        </div>
                    <div className={styles.detailsContainer1}>
                        <h1>Nombre y Apellido</h1>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea expedita. Molestiae quisquam enim nihil reiciendis maiores itaque labore excepturi voluptas vel quasi? Laudantium tempore necessitatibus mollitia sapiente, culpa illo?</h3>
                        <div className={styles.linkContainer}>
                            <a className={styles.hrefSocial} href=""><SiLinkedin className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><AiFillGithub className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><ImGoogle2 className={styles.linkIcons}/></a>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.detailsContainer2}>
                        <h1>Nombre y Apellido</h1>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea expedita. Molestiae quisquam enim nihil reiciendis maiores itaque labore excepturi voluptas vel quasi? Laudantium tempore necessitatibus mollitia sapiente, culpa illo?</h3>
                        <div className={styles.linkContainer}>
                            <a className={styles.hrefSocial} href=""><SiLinkedin className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><AiFillGithub className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><ImGoogle2 className={styles.linkIcons}/></a>
                            
                        </div>
                    </div>
                    <div className={styles.imgContainer2}>
                        <img className={styles.cardImg} src={userLogo} alt="loading.." srcset="" />
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.imgContainer1}>
                        <img className={styles.cardImg} src={userLogo} alt="loading.." srcset="" />
                    </div>
                    <div className={styles.detailsContainer1}>
                        <h1>Nombre y Apellido</h1>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea expedita. Molestiae quisquam enim nihil reiciendis maiores itaque labore excepturi voluptas vel quasi? Laudantium tempore necessitatibus mollitia sapiente, culpa illo?</h3>
                        <div className={styles.linkContainer}>
                            <a className={styles.hrefSocial} href=""><SiLinkedin className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><AiFillGithub className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><ImGoogle2 className={styles.linkIcons}/></a>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.detailsContainer2}>
                        <h1>Nombre y Apellido</h1>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea expedita. Molestiae quisquam enim nihil reiciendis maiores itaque labore excepturi voluptas vel quasi? Laudantium tempore necessitatibus mollitia sapiente, culpa illo?</h3>
                        <div className={styles.linkContainer}>
                            <a className={styles.hrefSocial} href=""><SiLinkedin className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><AiFillGithub className={styles.linkIcons}/></a>
                            <a className={styles.hrefSocial} href=""><ImGoogle2 className={styles.linkIcons}/></a>
                            
                        </div>
                    </div>
                    <div className={styles.imgContainer2}>
                        <img className={styles.cardImg} src={userLogo} alt="loading.." srcset="" />
                    </div>  
                </div>

            </div>
        </React.Fragment>
    )
}

export default About;