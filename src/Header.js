import { BrowserRouter, Route, Link } from 'react-router-dom'; 	
import React, { Component } from 'react';	
import './Header.css'; 	

class Header extends Component {	
  render() {	
    return (	
      <section className="header">	
        <div className="header-line-one">	
          <div className="name">Edward K. Kim</div>	
          <div className="navigation">	
            <Link to="/" className="projects-header">Projects</Link>	
            <Link to="/articles" className="articles-header">Articles</Link>	
            <Link to="/research" className="research-header">Journal Club</Link>	
          </div>	
        </div>	
        <div className="header-line-two">	
          <div className="specialization">	
            Business Admin. / Software Engineering	
          </div>	
        </div>	
      </section>	
    )	
  }	
}	

export default Header;