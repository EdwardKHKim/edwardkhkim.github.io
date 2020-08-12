import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import Research from './Research.js'; 
import './App.css';
import './Header.css'
import Footer from './Footer.js';
import Header from './Header.js';  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="body">
          <Route exact path="/" component={Projects}/>
          <Route path="/articles" component={Articles} />
          <Route path="/research" component={Research} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
 
export default App;