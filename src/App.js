import LandingPage from "./components/LandingPage/landingPage"
import AboutMe from './components/AboutMePage/aboutMe'
import Project from "./components/project/project"
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/projects/projects"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div>
      <LandingPage/>
      <Projects/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App;
