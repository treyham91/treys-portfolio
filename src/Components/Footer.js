import React from 'react';
import github from '../static/images/logo_github.png';
import email from '../static/images/email.png';
import linkedin from '../static/images/logo_likedin.png';
import website from '../static/images/website.png';
import FooterItem from './FooterItem';


const footerItems = [
    { 'key': 'github', 'value': 'GitHub', 'link': 'https://github.com/treyham91', 'image': github },
    { 'key': 'linkedin', 'value': 'LinkedIn', 'link': 'https://www.linkedin.com/in/trey-hamilton-8739b7126/', 'image': linkedin },
    { 'key': 'email', 'value': 'Email', 'link': 'mailto:treyhamilton23@outlook.com', 'image': email },
    { 'key': 'website', 'value': 'Old Site', 'link': 'https://treyham91.github.io/', 'image': website },
]

const Footer = (props) => {

    return (
        <footer style={{ bottom: 0, width: '100%', borderTop: '1px solid lightgray', height: 100 }}>
            <ul style={{ listStyle: 'none', display: 'flex', margin: 'auto', padding: '5px', width: '300px' }}>
                {footerItems.map(item => {
                    return (
                        <li key={item.key}>
                            <FooterItem link={item.link} imageSrc={item.image} value={item.value} />
                        </li>
                    )
                })}
            </ul>
        </footer>
    );
}

export default Footer;