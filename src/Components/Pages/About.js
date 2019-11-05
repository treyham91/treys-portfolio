import React from 'react';
import '../../static/css/about.css'

const Home = () => {

    return (
        <div id="about-container">
            <div>
                <h2 id="about-header">About Me</h2>
                <div id="about-text">
                    Hi! My name is Trey Hamilton, and welcome to my page! I'm 28 years old, living in the twin cities with my fiance,
                    along with our dog and cat, Brody and Todd. I grew up in a small farm town in Wisconsin, and still find myself acclimating to living in the city!
                    As far as my technical background, most of my experience is in the .NET framework, although I have worked on other projects outside of that scope.
                    Most recently, I built a new company portal using React.js, which runs on top of a Node.js server running express. It is being used by the entire North
                    American division of the company, and is likely to be adopted by other company locations around the globe. It is always fun building a piece of software
                    that others are eager to use!<br /><br />

                    My other true passion is golf, and I love to play (when Minnesota weather is permitting!). I've been playing for the last
                    few years, and I'm currently developing a pretty cool web application that will use a social media type platform to bring
                    other local golfers together that may not otherwise have anybody to play with. It was inspired by the many people I have met
                    while playing golf, and how this game can bring many different people together! I also like to spend time taking my dog, Brody,
                    to his favorite off-leash dog park, and binge watching Netflix shows with my wife.
                </div>
            </div>
        </div>
    );
}

export default Home;