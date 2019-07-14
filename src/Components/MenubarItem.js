import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    padding: '10px'
  },
  link: {
    textDecoration: 'none',
    color: '#474646',
    fontFamily: 'Varela Round, sans-serif',
  }
})

const MenubarItem = (props) => {
  const classes = useStyles();
  return (
    <div style={{ marginRight: '30px' }}>
      <Typography variant="h6" color="inherit">
        <Button className={classes.button}>
          <Link className={classes.link} to={props.to}>{props.name}</Link>
        </Button>
      </Typography>
    </div>
  );
}

export default MenubarItem;