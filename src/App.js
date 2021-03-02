import LandingPage from "./components/LandingPage/landingPage"
import AboutMe from './components/AboutMePage/aboutMe'
import Project from "./components/project/project"
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/projects/projects"
import Footer from "./components/Footer/footer"
import ViewProject from "./components/viewProject/viewProject"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/project">
            <ViewProject/>
          </Route>
          <Route path="/" exact>
            <LandingPage/>
            <Projects/>
            <AboutMe/>
            <Footer/>
          </Route> 
        </Switch>
      </Router>
    </div>
  )
}

export default App;
