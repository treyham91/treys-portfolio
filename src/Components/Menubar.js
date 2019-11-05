import React from 'react';
import MenubarItem from './MenubarItem';
import MobileMenubar from './MobileMenubar';
import '../static/css/menubar.css';


const menuBarItems = [
    { 'key': 'home', 'to': '/', 'name': 'Home' },
    { 'key': 'about', 'to': '/about', 'name': 'About' },
    { 'key': 'projects', 'to': '/projects', 'name': 'Projects' },
    { 'key': 'skills', 'to': '/skills', 'name': 'Skills' },
]


const Menubar = (props) => {

    return (
        <React.Fragment>
            <div id="menubar-container">
                <div id="menubar-item-container">
                    {menuBarItems.map(item => {
                        return (
                            <MenubarItem id="menubar-item" key={item.key} to={item.to} name={item.name} />
                        )
                    })}
                </div>
            </div>
            <MobileMenubar />
        </React.Fragment>
    );
}

export default Menubar;