import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {motion} from "framer-motion";

function Header()
{
    return(<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <motion.div
            initial={{color:'white'}}
            animate={{ rotate: 180 }}
            transition={{ repeat: Infinity, repeatDelay: 1 ,type:'spring',stiffness:20}}
            whileHover={{scale:1.3}} style={{marginRight:'8px'}}><FavoriteIcon /></motion.div>
            <motion.div
            initial={{x:'-100vw'}}
            animate={{x:0}}
            transition={{delay:0.5}}
            ><Navbar.Brand href="#">FUNMATION</Navbar.Brand></motion.div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link eventKey={2} href="#">
                    Contact Us
                </Nav.Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
      </>)
}

export default Header;