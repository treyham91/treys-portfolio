import React from 'react';
import '../static/css/footer.css';

const FooterItem = (props) => {

    return (
        <a href={props.link} style={{ textDecoration: 'none', color: '#474646' }}>
            <div id="footer-item" href="https://github.com/treyham91">
                <img id="footer-image" style={{ height: '25px' }} src={props.imageSrc} alt="Cannot be displayed" />
            </div>
        </a>
    );
}

export default FooterItem;