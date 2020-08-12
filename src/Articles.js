import React from "react"
import ArticlesHeader from './ArticlesHeader.js'
import './ArticlesHeader.css'
 
function Articles(props) {
  return (
    <div>
      <section className="articles">
        <ArticlesHeader/>
      </section>
    </div>
  )
}
 
export default Articles;