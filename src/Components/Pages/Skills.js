import React, { useState } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '1000px',
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        textAlign: 'center',
        marginTop: '20px'
    },
    text: {
        fontFamily: 'Varela Round, sans-serif',
    },
}));

const skillItems = [
    { 'key': 'languages', 'label': 'Languages', 'items': ['Python', 'JavaScript', 'C#', 'SQL', 'R'] },
    {
        'key': 'technologies', 'label': 'Technologies', 'items': ['SQL Server', 'Visual Studio', '.NET Framework', 'SharePoint (Admin/Development)', 'React.js',
            'Node.js',
            'jQuery',
            'Django',
            'Angular 2',
            'REST APIs',
            'HTML',
            'CSS',
            'SQL Server Reporting Services',]
    },
    { 'key': 'databases', 'label': 'Databases', 'items': ['SQL Server', 'Oracle', 'MongoDB', 'SQLite',] },
    { 'key': 'os', 'label': 'OS', 'items': ['Windows', 'OSX'] },
];


const TabContainer = (props) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const setSkillItems = (itemsArray, label, classes) => {
    return (
        <TabContainer>
            <List>
                {itemsArray
                    .filter(item => item.label === label)
                    .map(items => {
                        return (
                            items.items.map(listItem => {
                                return (
                                    <div key={listItem + '-div'}>
                                        <Divider component="li" />
                                        <ListItem key={listItem + '-item'}>
                                            <ListItemText
                                                className={classes}
                                                key={listItem + '-item-text'}
                                                primary={listItem} />
                                        </ListItem>
                                    </div>
                                )
                            })
                        )
                    }
                    )}
            </List>
        </TabContainer>
    )
}

const Skills = () => {
    const classes = useStyles();
    const [value, setValue] = useState('languages');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Media query="(max-width: 1030px)">
            {matches =>
                matches ? (
                    <div style={{ width: '580px' }} className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                {skillItems.map(item => (
                                    <Tab style={{ fontFamily: 'Varela Round, sans-serif' }} value={item.key} key={item.key} label={item.label} />
                                ))}
                            </Tabs>
                        </AppBar>
                        {value === 'languages' && setSkillItems(skillItems, 'Languages', classes.text)}
                        {value === 'technologies' && setSkillItems(skillItems, 'Technologies', classes.text)}
                        {value === 'databases' && setSkillItems(skillItems, 'Databases', classes.text)}
                        {value === 'os' && setSkillItems(skillItems, 'OS', classes.text)}
                    </div>
                ) : (
                        <div className={classes.root}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    {skillItems.map(item => (
                                        <Tab style={{ fontFamily: 'Varela Round, sans-serif' }} value={item.key} key={item.key} label={item.label} />
                                    ))}
                                </Tabs>
                            </AppBar>
                            {value === 'languages' && setSkillItems(skillItems, 'Languages', classes.text)}
                            {value === 'technologies' && setSkillItems(skillItems, 'Technologies', classes.text)}
                            {value === 'databases' && setSkillItems(skillItems, 'Databases', classes.text)}
                            {value === 'os' && setSkillItems(skillItems, 'OS', classes.text)}
                        </div>
                    )}

        </Media>
    )
}

export default Skills;