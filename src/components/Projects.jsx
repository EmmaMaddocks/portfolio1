import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

const Projects = () => {


    return (

<div className="projects_container">

    <div className="project_card">
        <h2>Back End</h2>
        <h1>NC News</h1>
        <p>A RESTful api built with a model, view, controller design pattern.</p>
        <p>Javascript, PostgreSQL, Express, Heroku</p>
        <a href=''><FaGithub size='1.7em' color='#ff489d'/></a>
        <a href=''><IoMdOpen size='2em' color='#ff489d'/></a>

    </div>



    <div className="project_card">
        <h2>Front End</h2>
        <h1>NC News</h1>
        <p>A news application created using HTML, CSS and  React.js which utilises the NC-News api above.</p>
        <p>HTML, CSS, React, Vercel</p>
        <p>Project Links</p>
    </div>



<div className="project_card">
    <h2>Front End</h2>
    <h1>Project title</h1>
    <p>A responsive demo website using CSS grid.</p>
    <p>HTML CSS Netlify</p>
    <p>Project Links</p>
</div>


<div className="project_card">
    <h2>Project subitle</h2>
    <h1>Project title</h1>
    <p>Project info</p>
    <p>Project languages</p>
    <a href=''><FaGithub/></a>
</div>

</div>

    )
}

export default Projects