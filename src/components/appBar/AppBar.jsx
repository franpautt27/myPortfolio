import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useState, useEffect, useContext } from "react";
import AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Home';
import { ThemeContext } from "../../context.js";
import{ Link } from "react-scroll";




export default function ButtonAppBar(props){
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(1),
            color: darkMode ? 'white' : "black",
            right: "50%"
        },
        title: {
            flexGrow: 1,
            color: 'black'
        },
        appBarTransparent: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            visibility :  (window.innerWidth > 768) ? 'visible': 'hidden'
        },
        appBarSolid: {
            backgroundColor: '#59b256',
            visibility :  (window.innerWidth > 768) ? 'visible': 'hidden'
        }
    }));

    const classes = useStyles();
    const [navBackground, setNavBackground] = useState("appBarTransparent");

    const navRef = React.useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = (window.scrollY > 310 && window.scrollY < 1900);
            if (show) {
                setNavBackground('appBarSolid');
            } else {
                setNavBackground('appBarTransparent');
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar  style={{ 
                    float       : 'none', 
                    width       : '400px',
                    marginLeft  : 'auto',
                    marginRight : 'auto',
                    visibility :  (window.innerWidth > 768) ? 'visible': 'hidden'
                }} >
                    <IconButton className={classes.menuButton}>
                        <Link to="home" smooth={true} duration={1000} > <MenuIcon /> </Link>
                    </IconButton>
                    
                    <Button className={classes.menuButton} > <Link to="about" smooth={true} duration={1000} > { props.about } </Link> </Button>
                    <Button  className={classes.menuButton}> <Link to="projects" smooth={true} duration={1000} > { props.projects } </Link> </Button>
                    <Button  className={classes.menuButton}> <Link to="contact" smooth={true} duration={1000} > { props.contact } </Link> </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}