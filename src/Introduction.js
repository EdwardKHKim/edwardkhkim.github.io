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
						I'm currently a research assistant @ UBC Sauder School of Business. Previously, I was a volunteer 
						research assistant @ UBC ECE Robotics Control Lab in the autonomous surgical robotics team. Other 
						research areas I have experience in include Artificial Intelligence, Computational Biology, and Neuroscience. 
						I have also had the opportunity to part of the Core Tech Incubator Program by entrepreneurship@UBC. I'm a recent
						B.Sc. graduate of the Integrated Sciences Department @ UBC, and a B.A. candidate studying Computer 
						Science, Economics, and Mathematics @ UBC.
					</p>
					<p>
						My current interests are 
						<div className="introduction-interests">
							<ul>
								<li>Android/Full-Stack/iOS Development</li>
                <li>Interdisciplinary Research</li>
                <li>Product Management</li>
								<li>Management Consulting</li>
								<li>Baseball</li>
								<li>Swimming</li>
								<li>Tennis</li>
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
						<li>Dart</li>
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
            View my resume <span className="introduction-fi-arrow-right" ><FiArrowRight/></span>
				</div>
      </section>
    )
  }
}

export default Introduction; 