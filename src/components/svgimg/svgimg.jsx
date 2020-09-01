import React from 'react';
import Imageurl from '../../svgr/first.svg';
import styles from './Svg.module.css';
import {Card,Typography,Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Image()
{
    return( <div>
        <div className={styles.end}>
        <Grid container spacing={2} justify='center' className={styles.grid} >
              <Grid item component={Card} xs={12} md={3} data-aos='fade-right' >
              <motion.div className={styles.space}
              initial={{x:'-100vw'}}
              animate={{x:0}}
              transition={{delay:2.5},{ ease: [0.17, 0.67, 0.83, 0.67] }}
              > 
                  <h2>FUNMATION</h2>
                  <Typography>Learning is fun when you see animated objects around your project.
                         Admiring someone's work and then work hard to clone it and try some other level animations are alose creative.</Typography>
            <motion.div
            whileHover={{scale:[1.2,1,1.2,1,1.2,1]}}
            ><Button variant="outlined" color="primary">
                Try Funmation
            </Button></motion.div>
            </motion.div></Grid>
                    <img src={Imageurl} alt='svgimage' />
                </Grid>
        </div>
    </div>)
}

export default Image;