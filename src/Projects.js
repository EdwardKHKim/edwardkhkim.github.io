import React from "react"
import './Projects.css'
import Introduction from "./Introduction.js"
import Thumbnail from './Thumbnail.js'
import CarpoolApp from './img/carpool-app.png'
import NaturePublication from './img/nature-publication.png'
import PersonalWebsite from './img/personal-website.png'
import CovidTracker from './img/covid-tracker.png'
import NewsApp from './img/news-app.png'
import './Introduction.css'
 
function Projects(props) {

  return (
    <div>
      <section className="projects">
        <Introduction/>
        <div className="projects-first-row">
          <div className="carpool-app">
            <Thumbnail
            link="https://github.com/EdwardKHKim/android-carpool"
            image={CarpoolApp}
            title="Carpool Application Project"
            category="Native Mobile Application / Android"
          />
          </div>
          <div className="news-card-app">
            <Thumbnail
              link="https://github.com/EdwardKHKim/news-tracker"
              image={NewsApp}
              title="News Application Project"
              category="Native Mobile Application / iOS"
            />
          </div>
        </div>
        <div className="projects-second-row">
          <div className="nature-publication">
            <Thumbnail
            link= "https://www.nature.com/articles/s41598-019-54051-y"
            image={NaturePublication}
            title="Computational Biology Research"
            category="Research Publication"
          />
          </div>
          <div className="portfolio-website">
            <Thumbnail
              link="https://github.com/EdwardKHKim/edwardkhkim.github.io"
              image={PersonalWebsite}
              title="Portfolio Website"
              category="Website / React"
            />
          </div>
        </div>
        <div className="projects-third-row">
          <div className="covid-tracker">
            <Thumbnail
            link="https://github.com/EdwardKHKim/covid-tracker"
            image={CovidTracker}
            title="Covid Tracker Webpage"
            category="Static Website"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default Projects;