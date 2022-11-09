import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

const Projects = () => {


    return (

<div className="projects_container" id='projects'>
<h1>Recent Work</h1>
    <div className="project_card">
        <h2>NC News</h2>
        <p>A RESTful api built with a model, view, controller design pattern.</p>
        <p>Javascript, PostgreSQL, Express, Heroku</p>
        <a href=''><FaGithub size='1.7em' color='#ff489d'/></a>
        <a href=''><IoMdOpen size='2em' color='#ff489d'/></a>
    </div>
    <div className="project_card">
        <h2>NC News</h2>
        <p>A news application created using HTML, CSS and  React.js which utilises the NC-News api above.</p>
        <p>HTML, CSS, React, Vercel</p>
        <p>Project Links</p>
    </div>
<div className="project_card">
    <h2>Project title</h2>
    <p>A responsive demo website using CSS grid.</p>
    <p>HTML CSS Netlify</p>
    <p>Project Links</p>
</div>
</div>

    )
}

export default Projects