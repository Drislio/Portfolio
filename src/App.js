import LandingPage from "./components/LandingPage/landingPage"
import AboutMe from './components/AboutMePage/aboutMe'
import Project from "./components/project/project"
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/projects/projects"
import Footer from "./components/Footer/footer"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <LandingPage/>
      <Projects/>
      <AboutMe/>
      <Footer/>
      </Router>
    </div>
  )
}

export default App;
