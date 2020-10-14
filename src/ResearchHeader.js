import './ResearchHeader.css'
import React, { Component } from 'react';
import {FiArrowRight} from 'react-icons/fi'

class DataHeader extends Component {
  render() {
		return (
			<section className="research-readme">
        <div className="research-readme-header">
          edwardkim/README<text className="md-file">.md</text>
        </div>
				<article className="research-readme-body">
					<p>
						Hi there <span class="wave-hand">👋</span>
					</p>
					<p>
						To be compentent in the rapidly changing world, continuous learning is important. In "Journal club", I
						critically evaluate recent research publications in diverse areas, done by academia and industry, for 
						anyone to understand.
					</p>
				</article>
				<div className="research-readme-resume">
					<a clasName="research-resume-text" href="https://docs.google.com/document/d/1ElnPykqWrC4-d4hJIGkn77-ji49F4v-svwNlJh9dSD4/edit?usp=sharing" target="_blank">
					View my resume <span className="research-fi-arrow-right" ><FiArrowRight/></span>
					</a>
				</div>
      </section>
		)
	}
}

export default DataHeader; 