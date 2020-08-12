import React from "react"
import './Projects.css'
import Introduction from "./Introduction.js"
import Thumbnail from './Thumbnail.js'
import CarpoolApp from './img/carpool-app.png'
import BusinessCardApp from './img/business-card-app.png'
import NaturePublication from './img/nature-publication.png'
import PersonalWebsite from './img/personal-website.png'
import './Introduction.css'
 
function Projects(props) {

  return (
    <div>
      <section className="projects">
        <Introduction/>
        <div className="projects-first-row">
          <div className="carpool-app">
            <Thumbnail
            link=""
            image={CarpoolApp}
            title="Carpool Application Project"
            category="Native Mobile Application / Android"
          />
          </div>
          <div className="business-card-app">
            <Thumbnail
              link=""
              image={BusinessCardApp}
              title="Business Card Application Project"
              category="Native Mobile Application / Android"
            />
          </div>
        </div>
        <div className="projects-second-row">
          <div className="nature-publication">
            <Thumbnail
            link= ""
            image={NaturePublication}
            title="Computational Biology Research"
            category="Research Publication"
          />
          </div>
          <div className="portfolio-website">
            <Thumbnail
              link=""
              image={PersonalWebsite}
              title="Portfolio Website"
              category="Website / React"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default Projects;