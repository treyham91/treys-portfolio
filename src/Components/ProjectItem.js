import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth: 345,
        marginRight: '10px',
        marginTop: '10px',
    },
    media: {
        height: 140,
    },
    text: {
        color: '#474646',
        fontFamily: 'Varela Round, sans-serif',
    }
});

const ProjectItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.imageTitle}
            />
            <CardContent style={{ minHeight: '110px' }}>
                <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                    {props.projectName}
                </Typography>
                <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                    {props.projectDesription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    <a className={classes.text} href={props.projectLink} style={{ textDecoration: 'none', color: '#474646' }}>View Repository</a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectItem;