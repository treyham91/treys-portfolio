import React, { useState } from 'react';
import SkillItem from '../SkillItem';
import '../../static/css/skills.css'
import progLang from '../../static/images/pl.png';
import tech from '../../static/images/tech.png';
import database from '../../static/images/database.png';
import os from '../../static/images/os.png';

const skillItems = [
    { 'key': 'languages', 'image': progLang, 'label': 'Languages', 'items': ['Python', 'JavaScript', 'C#', 'SQL', 'R'] },
    {
        'key': 'technologies', 'image': tech, 'label': 'Technologies', 'items': ['SQL Server', 'Visual Studio', '.NET Framework', 'SharePoint (Admin/Development)', 'React.js',
            'Node.js',
            'jQuery',
            'Django',
            'Angular 2',
            'REST APIs',
            'HTML',
            'CSS',
            'SQL Server Reporting Services',]
    },
    { 'key': 'databases', 'image': database, 'label': 'Databases', 'items': ['SQL Server', 'Oracle', 'MongoDB', 'SQLite',] },
    { 'key': 'os', 'image': os, 'label': 'OS', 'items': ['Windows', 'OSX', 'Android', 'IOS'] },
];

const Skills = (props) => {
    return (
        <div id="skills-container">
            {skillItems.map(item => {
                return (
                    <SkillItem imageSrc={item.image} skillArea={item.label} skillsArray={item.items} />
                )
            })}
        </div>
    )
}

export default Skills;