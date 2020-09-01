import React from 'react';
import {Card,Grid} from '@material-ui/core';
import styles from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer()
{
    return(
    <footer className={styles.footer} data-aos='flip-up'>
        {/* <h3>Anything to show</h3> */}
         <Grid container spacing={5} justify='center'>
               <Grid  item component={Card} xs={12} md={3} className={styles.grid} border={0} >
                   <h3>Funmation</h3>
                   <p>provides progressive, and attractive animation designs accessible on every smart technology for everyone
                    ©FUNMATION PTY LTD 2020. All rights reserved</p>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.grid} >
                    <h3 className={styles.head}>Region</h3>
                    <ul className={styles.remli}>
                    <li>India</li>
                    <li>Germany</li>
                    <li>France</li>
                    <li>UK</li>
                    </ul>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.grid}>
                    <h3 className={styles.head}>Usage</h3>
                    <ul className={styles.remli}>
                    <li>Websites</li>
                    <li>Games</li>
                    <li>Apps</li>
                    <li>Videos</li>
                    </ul>
                </Grid></Grid>
                <div className={styles.icons}
                >
                   <FacebookIcon style={{marginRight:'10px'}} />
                   <InstagramIcon style={{marginRight:'10px'}} />
                   <TwitterIcon />
                </div>
    </footer>)
}

export default Footer;