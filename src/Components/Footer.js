import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import github from '../static/images/logo_github.png';
import email from '../static/images/email.png';
import linkedin from '../static/images/logo_likedin.png';
import website from '../static/images/website.png';
import FooterItem from './FooterItem';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        padding: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#ECECEC',
    },
});

const footerItems = [
    { 'key': 'github', 'value': 'GitHub', 'link': 'https://github.com/treyham91', 'image': github },
    { 'key': 'linkedin', 'value': 'LinkedIn', 'link': 'https://www.linkedin.com/in/trey-hamilton-8739b7126/', 'image': linkedin },
    { 'key': 'email', 'value': 'Email', 'link': 'mailto:treyhamilton23@outlook.com', 'image': email },
    { 'key': 'website', 'value': 'Old Site', 'link': 'https://treyham91.github.io/', 'image': website },
]

const Footer = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                if (value) {
                    setValue(null);
                }
                else {
                    setValue(newValue);
                }
            }}
            showLabels
            className={classes.root}
        >
            {footerItems.map(item => {
                return (
                    <FooterItem key={item.key} value={item.value} link={item.link} imageSrc={item.image} />
                )
            })}
        </BottomNavigation>
    );
}

export default Footer;