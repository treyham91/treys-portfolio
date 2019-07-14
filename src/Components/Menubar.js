import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenubarItem from './MenubarItem';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#ECECEC',
        minWidth: '100%'
    },
});


const menuBarItems = [
    { 'key': 'home', 'to': '/', 'name': 'Home' },
    { 'key': 'about', 'to': '/about', 'name': 'About' },
    { 'key': 'projects', 'to': '/projects', 'name': 'Projects' },
    { 'key': 'skills', 'to': '/skills', 'name': 'Skills' },
]


const Menubar = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar style={{ marginLeft: '10px' }}>
                {menuBarItems.map(item => {
                    return <MenubarItem key={item.key} to={item.to} name={item.name} />
                })}
            </Toolbar>
        </AppBar>
    );
}

export default Menubar;