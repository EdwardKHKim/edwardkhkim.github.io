import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import './ArticlesHeader.css'; 
import {FiArrowRight} from 'react-icons/fi'

class ArticlesHeader extends Component {
  render() {
    return (
			<section className="articles-readme">
        <div className="articles-readme-header">
          edwardkim/README<text className="md-file">.md</text>
        </div>
				<article className="articles-readme-body">
					<p>
						Hi there <span class="wave-hand">👋</span>
					</p>
					<p>
						I beleive in giving back to the greater community, espeically via knowledge sharing. My Medium posts are on 
					</p>
					<p>
						<div className="medium-topics">
							<ul>
								<li>Programming</li>
								<li>Industry 4.0</li>
                <li>Economics</li>
							</ul>
						</div>
					</p>
          <p>
            I'm hoping that, through reading my articles, others don't have to struggle through the same problems 
            in software development I had, and I can provide insight on the dramatic change around us, hapenning at 
            exponential speed. 
          </p>
				</article>
				<div className="articles-readme-resume">
						View my resume <span className="articles-fi-arrow-right" ><FiArrowRight/></span>
				</div>
      </section>
    )
  }
}

export default ArticlesHeader; 