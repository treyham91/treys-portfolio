import React, { useEffect, useState } from 'react';
import ProjectItem from '../ProjectItem';
import Loading from '../Loading';
import python from '../../static/images/pythonlogo.png';
import javascript from '../../static/images/javascriptlogo.jpg';
import R from '../../static/images/Rlogo.jpeg';
import html from '../../static/images/html.png';
import axios from 'axios';
import Media from 'react-media';

const setImage = (language) => {
    let image = null;
    if (language === "Python" || language === "Jupyter Notebook") {
        image = python
    }

    else if (language === "JavaScript") {
        image = javascript
    }

    else if (language === "HTML") {
        image = html
    }

    else if (language === "R") {
        image = R
    }

    else {
        image = null
    }

    return image
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
                projects: null,
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
        <div style={{ width: '100%', marginTop: '20px' }}>
            {data.pending ? <Loading /> :
                <div>
                    <Media query="(max-width: 1440px)">
                        {matches =>
                            matches ? (
                                <div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {data.projects.slice(0, 2).map(repo => {
                                            return (
                                                <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                            )
                                        })}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {data.projects.slice(2, 4).map(repo => {
                                            return (
                                                <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                            )
                                        })}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {data.projects.slice(4, 6).map(repo => {
                                            return (
                                                <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                            )
                                        })}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {data.projects.slice(6, 8).map(repo => {
                                            return (
                                                <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                            )
                                        })}
                                    </div>
                                </div>
                            ) :
                                (
                                    <div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            {data.projects.slice(0, 4).map(repo => {
                                                return (
                                                    <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                                )
                                            })}
                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            {data.projects.slice(4, 8).map(repo => {
                                                return (
                                                    <ProjectItem key={repo.id} image={setImage(repo.language)} imageTitle={repo.link} projectName={repo.name} projectDesription={repo.description} projectLink={repo.html_url} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                    </Media>
                </div>}
        </div>
    );
}

export default Project;