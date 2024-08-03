import React from "react";
import project1 from '../assets/images/wild-rydes-c.jpg';
import project2 from '../assets/images/credit-card-c.jpg';
import project3 from '../assets/images/household-utility-c.jpg';
import project4 from '../assets/images/react-redux-c.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rutul204/Wild-Rydes-Fleet" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/rutul204/Wild-Rydes-Fleet" target="_blank" rel="noreferrer"><h2>AWS Wild Rydes Fleet</h2></a>
                <p>Developed a Serverless Web Application using AWS services for a ride-hailing service called Wild Rydes</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/Credit-Card-Fraud-Detection" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/rutul204/Credit-Card-Fraud-Detection" target="_blank" rel="noreferrer"><h2>Credit Card Fraud Detection Model</h2></a>
                <p>Built a robust credit card fraud detection model in Python by applying ML techniques including Neural networks,
                Logistic regression, SVM</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/BSI_Project" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/rutul204/BSI_Project" target="_blank" rel="noreferrer"><h2>Household Utility Application</h2></a>
                <p>Developed an android application using Java, Google Firebase, and XML using Android Studio where users can find relevant service providers for their household needs</p>
            </div>
            <div className="project">
                <a href="https://github.com/rutul204/React-App" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/rutul204/React-App" target="_blank" rel="noreferrer"><h2>Tic Tac Toe</h2></a>
                <p>Created a tic-tac-toe game which records game history. Utilized React and Redux to develop the application</p>
            </div>
        </div>
    </div>
    );
}

export default Project;