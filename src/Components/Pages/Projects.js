import React, { useEffect, useState } from 'react';
import ProjectItem from '../ProjectItem';
import python from '../../static/images/pythonlogo.png';
import javascript from '../../static/images/javascriptlogo.jpg';
import R from '../../static/images/Rlogo.jpeg';
import html from '../../static/images/html.png';
import axios from 'axios';
import '../../static/css/projects.css'

const setImage = (language) => {
    switch (language) {
        case "Python" || "Jupyter Notebook":
            return python;
        case "Jupyter Notebook":
            return python;
        case "JavaScript":
            return javascript;
        case "HTML":
            return html;
        case "R":
            return R;
        default:
            return null;
    }
}



const Project = () => {
    const [data, setData] = useState({
        projects: [],
        complete: false,
        pending: false,
        error: false
    });

    useEffect(
        () => {
            setData({
                projects: res.data,
                pending: true,
                error: false,
                complete: false
            })
            axios.get("https://api.github.com/users/treyham91/repos")
                .then(res =>
                    setData({
                        projects: res.data,
                        pending: false,
                        error: false,
                        complete: true
                    }),
                )
                .catch(() =>
                    setData({
                        projects: null,
                        pending: false,
                        error: true,
                        complete: true
                    }),
                );
        },
        []
    );

    return (
        <div id="project-container">
            <h1>Projects Overview</h1>
            <h3>This is a list of my projects on GitHub</h3>
            <div className="project-items">
                <div className="items">
                    {pending ? 'Retrieving Projects...' :
                        data.projects.slice(0, 5).map(repo => {
                            return (
                                <ProjectItem
                                    key={repo.id}
                                    image={setImage(repo.language)}
                                    imageTitle={repo.link}
                                    projectName={repo.name}
                                    projectDesription={repo.description}
                                    projectLink={repo.html_url}
                                    onClick={() => window.location.href = repo.html_url} />
                            )
                        })}
                </div>
            </div>
            <div className="project-items">
                <div className="items">
                    {data.projects.slice(5, 10).map(repo => {
                        return (
                            <ProjectItem
                                key={repo.id}
                                image={setImage(repo.language)}
                                imageTitle={repo.link}
                                projectName={repo.name}
                                projectDesription={repo.description}
                                projectLink={repo.html_url}
                                onClick={() => window.location.href = repo.html_url} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Project;