import React, { Component } from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react'; 
import github from './img/github-mark.png';
import linkedin from './img/linkedin-mark.png';
import medium from './img/medium-mark.png';
import './Footer.css';

class Footer extends Component {
    state={
			github: github,
      medium: medium, 
      linkedin: linkedin, 
    }
    render() {
      return (
        <section className="footer">
          <div className="footer-social-media">
            <table>
              <tr>
                <td width="45">
                  <a href="http:///some-website.com/my-social-media-url" target="_blank">
                    <img className="linkedin" src={this.state.linkedin} alt="Linkedin" width="30" height="30"/>
                  </a>
                </td>
                <td width="45">
                  <a href="http:///www.github.com/edwardkhkim" target="_blank">
                    <img className="github" src={this.state.github} alt="Github" width="30" height="30"/>
                  </a>
                </td>
                <td width="45">
                  <a href="http:///some-website.com/my-social-media-url" target="_blank">
                    <img className="medium" src={this.state.medium} alt="Medium" width="30" height="30"/>
                  </a>
                </td>
                <td>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" 
                  icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="3" 
                  roundness="50%" url="mailto:edwardk.kim@alumni.ubc.ca" size="30" />
                </td>
              </tr>
            </table>
        	</div>
          <div className="footer-copyright">
            © 2020, Edward K. Kim
          </div>
        </section>
    );
  }
}

export default Footer;