import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        textAlign: 'left',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div style={{ width: '500px', margin: 'auto', marginTop: '20px' }}>
            <Paper className={classes.root}>
                <h2 className={classes.text} style={{ textAlign: 'center' }}>About Me</h2>
                <Typography className={classes.text} style={{ fontSize: '16px' }} component="p">
                    Hi! My name is Trey Hamilton, and welcome to my page! I'm 28 years old, living in the twin cities with my fiance,
                    along with our dog and cat, Brody and Todd. I grew up in a small farm town in Wisconsin, and still find myself acclimating to living in the city!
                    Most of my development experience has been revolved around the manufacturing industry, building applications inside
                    of the .NET Framework, writing T-SQL reports, and SharePoint development and administration. While I have gained much
                    insight into the professional world of development, my real passion is working with web technologies. You can check out my
                    Projects page to see some of the work I've done over the years.<br /><br />

                    My other true passion is golf, and I love to play (when Minnesota weather is permitting!). I've been playing for the last
                    few years, and I'm currently developing a pretty cool web application that will use a social media type platform to bring
                    other local golfers together that may not otherwise have anybody to play with. It was inspired by the many people I have met
                    while playing golf, and how this game can bring many different people together! I also like to spend time taking my dog, Brody,
                    to his favorite off-leash dog park, and binge watching Netflix shows with my fiance.
                </Typography>
            </Paper>
        </div>
    );
}

export default Home;