import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import project1 from '../assets/images/wild_rydes_fleet.webp';
import project2 from '../assets/images/credit-card.jpg';
import project3 from '../assets/images/household-utility.jpeg';
import project4 from '../assets/images/react-redux.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rutul204/Wild-Rydes-Fleet" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="720px" height="460px"/></a>
                <a href="https://github.com/rutul204/Wild-Rydes-Fleet" target="_blank" rel="noreferrer"><h2>AWS Wild Rydes Fleet</h2></a>
                <p>Developed a Serverless Web Application using AWS services for a ride-hailing service called Wild Rydes</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/Credit-Card-Fraud-Detection" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="720px" height="460px"/></a>
                <a href="https://github.com/rutul204/Credit-Card-Fraud-Detection" target="_blank" rel="noreferrer"><h2>Credit Card Fraud Detection Model</h2></a>
                <p>Built a robust credit card fraud detection model in Python by applying ML techniques including Neural networks,
                Logistic regression, SVM</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/BSI_Project" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="720px" height="460px"/></a>
                <a href="https://github.com/rutul204/BSI_Project" target="_blank" rel="noreferrer"><h2>Household Utility Application</h2></a>
                <p>Developed an android application using Java, Google Firebase, and XML using Android Studio where users can find relevant service providers for their household needs</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/React-App" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="720px" height="460px"/></a>
                <a href="https://github.com/rutul204/React-App" target="_blank" rel="noreferrer"><h2>Tic Tac Toe</h2></a>
                <p>Created a tic-tac-toe game which records game history. Utilized React and Redux to develop the application</p>
            </div>
        </div>
    </div>
    );
}

export default Project;