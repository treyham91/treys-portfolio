import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    image: {
        '&:hover': {
            opacity: '0.8',
            cursor: 'pointer'
        }
    }
})

const FooterItem = (props) => {
    const classes = useStyles();

    return (
        <a href={props.link} style={{ textDecoration: 'none', color: '#474646' }}>
            <div href="https://github.com/treyham91" style={{ marginTop: '5px', paddingRight: '50px' }}>
                <img className={classes.image} style={{ height: '20px' }} src={props.imageSrc} alt="Cannot be displayed" />
                <Typography style={{ fontSize: '13px', fontFamily: 'Varela Round, sans-serif' }} variant="h6" color="inherit">
                    {props.value}
                </Typography>
            </div>
        </a>
    );
}

export default FooterItem;