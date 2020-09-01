import React, { useEffect } from 'react';
import styles from './Middle.module.css';
import {Card,Grid} from '@material-ui/core';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import ChatIcon from '@material-ui/icons/Chat';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Middle()
{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
    <div className={styles.middle}>
        <h2>Dive In</h2>
        <Grid container spacing={5} justify='center'>
               <Grid  item component={Card} xs={12} md={3} data-aos='fade-left' className={styles.grid} >
                   <BookmarksIcon
                   fontSize='large'
                    />
                 <h5 className={styles.head}>Bookmark us for further more excited animations you want to see.</h5>

                </Grid>
                <Grid item component={Card} xs={12} md={3} data-aos='fade-up' className={styles.gridbtw} >
                  <motion.div whileHover={{scale:1.1}} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}>
                  <BatteryAlertIcon 
                   fontSize='large'/>
                   <h5 className={styles.head}>Get recharge after seeing the world of animation with us.</h5>
                   <p className={styles.head}>Suit yourself on an amazing animated journey that includes lots of fun.</p>
                  </motion.div>
                </Grid>
                <Grid item component={Card} xs={12} md={3} data-aos='fade-right' className={styles.grid}>
                   <ChatIcon
                   fontSize='large' 
                   />
                 <h5 className={styles.head}>Contact us now so we can get your animation ideas and work on them.</h5>

                </Grid></Grid>
    </div>)
}

export default Middle;