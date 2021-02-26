import "../projects/projects.css"
import Card from "../projects/cards"

const Projects =() =>{
    return (
        <div className='container'>
            <h1 id="projectHeading">Projects</h1>
            <div className='projects'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <hr/>
        </div>
    )
}

export default Projects