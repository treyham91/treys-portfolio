import React from 'react';
import '../static/css/projects.css';

const ProjectItem = (props) => {

    return (
        <div id="project-item-container" onClick={props.onClick}>
            <img className="project-item-image" src={props.image} alt="No language" />
            <p className="project-item-desc">
                {props.projectDesription}
            </p>
        </div>
    );
}

export default ProjectItem;