import React, { useState } from 'react';
import '../../static/css/home.css';
import Highlight from 'react-highlight.js';

const Home = () => {
    const [visitorName, setVisitorName] = useState("");

    const codeValues = [
        "import React from 'react';", "function VisitorName(props) {",
        "return (", "<p>{props.visitorName}</p>", ")", "}",
        "function Visitor()  {", "return (", "<div id=\"visitor-text-container\">",
        '<VisitorName visitorName="', '"/>', "</div>", ")", "}", "export default Visitor;"
    ]

    return (
        <div id="home-body-container">
            <div id="visitor-container">
                <div id="visitor-textarea-container">
                    <Highlight id="code-area" style={{ margin: 0 }} language="javascript">
                        <p>{codeValues[0]}</p>
                        <br />
                        <p style={{ marginLeft: 10 }}>{codeValues[1]}</p>
                        <p style={{ marginLeft: 15 }}>{codeValues[2]}</p>
                        <p style={{ marginLeft: 20 }}>{codeValues[3]}</p>
                        <p style={{ marginLeft: 15 }}>{codeValues[4]}</p>
                        <p style={{ marginLeft: 5 }}>{codeValues[5]}</p>
                        <br />
                        <p style={{ marginLeft: 10 }}>{codeValues[6]}</p>
                        <p style={{ marginLeft: 15 }}>{codeValues[7]}</p>
                        <p style={{ marginLeft: 20 }}>{codeValues[8]}</p>
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginLeft: 25 }}>{codeValues[9]}</p>
                            <input placeholder="Name..." id="name-input" type="text" value={visitorName} onChange={event => setVisitorName(event.target.value)} />
                            <p>{codeValues[10]}</p>
                        </div>
                        <p style={{ marginLeft: 20 }}>{codeValues[11]}</p>
                        <p style={{ marginLeft: 15 }}>{codeValues[12]}</p>
                        <p style={{ marginLeft: 10 }}>{codeValues[13]}</p>
                        <br />
                        <p>{codeValues[14]}</p>
                    </Highlight>
                </div>
                <div id="visitor-name-container">
                    <p id="visitor-name">Welcome!</p>
                    <p style={{ fontSize: 50, fontFamily: 'Varela Round, sans-serif' }}>{visitorName}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;