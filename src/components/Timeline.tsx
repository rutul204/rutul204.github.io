import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">HPC Systems Analyst - ASU Research Computing</h3>
            <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
            {/* <p>
              Python, Automation, WareWulf, Saltstack
            </p> */}
            <ul>
              <li>
                Developed and optimized Python scripts to enhance HPC workflows for Sol (ASU’s Supercomputer)
              </li>
              <li>
                Leveraged Slurm and Bash to automate maintenance tasks resulting in overall reduction of 20% in GPU drainange
              </li>
              <li>
                Utilized Warewulf, SaltStack, and Jenkins to orchestrate and deploy GPU and CPU nodes
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2021 - Nov 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Associate - Morgan Stanley</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            {/* <p>
              Full-stack Web Development, DevOps Automation, Microservices Architecture
            </p> */}
            <ul>
              <li>
                Worked as full-stack developer handling 5 .NET backend projects, 2 Angular frontend projects, and maintained
                (MySQL, DB2) database servers through Liquibase
              </li>
              <li>
                Migrated monolithic legacy .NET application into 4 dockerized microservices which reduced the build time by 65%
                and improved the overall performance
              </li>
              <li>
                Onboarded an Internal Kafka Error Manager utility by using it’s Docker image to handle the failures efficiently
              </li>
              <li>
                Established the test framework for the Angular project, increased the test coverage of the backend projects from
                0% to 50%, and improved code-quality measures
              </li>
              <li>
                Maintained 10+ CICD pipelines in Jenkins and Teamcity for automated deployments, and ensured consistent
                environments across development, testing and production stages
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - July 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technology Analyst Intern - Morgan Stanley</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
            {/* <p>
              Frontend Development, Library Component, User Experience
            </p> */}
            <ul>
              <li>
                Developed a generalized email component in Angular Library project using Typescript consisting of 3 email
                templates that any internal projects can consume through node package manager
              </li>
              <li>
                Parsed the Salesforce email template in the library project to remove the duplicate code in 4 different projects and
                maintain consistent UX across applications
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;