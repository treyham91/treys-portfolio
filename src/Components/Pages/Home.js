import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '1px solid #ECECEC',
    },
    text: {
        color: '#ECECEC',
        marginTop: '5px',
        fontFamily: 'Varela Round, sans-serif',
    },
    button: {
        color: '#ECECEC',
        border: '1px solid #ECECEC',
        marginTop: '10px',
        fontFamily: 'Varela Round, sans-serif',
        '&:hover': {
            opacity: '0.8'
        },
    },
    link: {
        textDecoration: 'none',
        color: '#ECECEC',
        fontFamily: 'Varela Round, sans-serif',
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div style={{ width: '500px', margin: 'auto', marginTop: '200px' }}>
            <Paper className={classes.root}>
                <Typography className={classes.text} variant="h3" component="h2">
                    Trey Hamilton
                </Typography>
                <Typography className={classes.text} style={{ fontSize: '25px' }} component="p">
                    Software Developer
                </Typography>
                <Button className={classes.button}><Link to="/about" className={classes.link}>About Me</Link></Button>
            </Paper>
        </div>
    );
}

export default Home;