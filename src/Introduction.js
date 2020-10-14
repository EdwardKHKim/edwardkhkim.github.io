import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import './Introduction.css'; 
import { FiArrowRight } from 'react-icons/fi'; 

class Introduction extends Component {
  render() {
    return (
			<section className="introduction">
        <div className="introduction-header">
          edwardkim/README<text className="md-file">.md</text>
        </div>
				<article className="introduction-body">
					<p>
						Hi there <span class="wave-hand">👋</span>
					</p>
					<p>
						I'm currently a research assistant @ UBC Sauder School of Business and Team Lead @ UBC AMS entrepreneurshipHub. Previously, I was a volunteer 
						research assistant @ UBC ECE Robotics Control Lab in the autonomous surgical robotics team. Other 
						research areas I have experience in include Artificial Intelligence, Computational Biology, and Neuroscience. 
						I have also had the opportunity to part of the Core Tech Incubator Program by entrepreneurship@UBC. I'm a recent
						B.Sc. graduate of the Integrated Sciences Department @ UBC, and a B.A. candidate taking coursework in Computer 
						Science, Economics, Mathematics and Political Science @ UBC. In addition, I am studying for the CFA and Actuarial (FSA) designations. 
					</p>
					<p>
						My current interests are 
						<div className="introduction-interests">
							<ul>
								<li>Android and iOS Development</li>
								<li>Applied Mathematics</li>
								<li>Economics</li>
                <li>Accounting, Finance and Consulting</li>
                <li>Product Management</li>
								<li>Baseball</li>
								<li>Swimming</li>
								<li>Travelling</li>
							</ul>
						</div>
					</p>
					<p>
						Diverse experiences have allowed me to venture into and buid a diverse skillset. Some skills I have experience in 
						are 
					</p>
				</article>
				<div className="introduction-skills">
					<ul>
						<li>Java</li>
						<li>Kotlin</li>
						<li>Python</li>
						<li>Swift</li>
						<li>JavaScript</li>
						<li>Ruby</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>MATLAB</li>
						<li>SQL</li>
						<li>R</li>
					</ul>
				</div>
				<div className="introduction-conclusion">
					<p>
						If you are interested in chatting about any of the topics I've listed above, feel free to DM me on Linkedin.
					</p>
				</div>
				<div className="introduction-resume">
					<a clasName="introduction-resume-text" href="https://docs.google.com/document/d/1ElnPykqWrC4-d4hJIGkn77-ji49F4v-svwNlJh9dSD4/edit?usp=sharing" target="_blank">
					View my resume <span className="introduction-fi-arrow-right"><FiArrowRight/>
			</span>
					</a>
				</div>
      </section>
    )
  }
}

export default Introduction; 