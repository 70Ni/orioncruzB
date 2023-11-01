import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Section/Navigation/Navigation";
import Brief from "./Section/Brief/Brief";
import Achieve from "./Section/Achievements/Achieve";
import Case from "./Section/Case/Case";
import Projects from "./Section/Projects/Projects";
import Clients from "./Section/Clients/Clients";
import Feedback from "./Section/Feedback/Feedback";
import Footer from "./Section/Footer/Footer";
import Capabilities from "./Section/Capabilities/Capabilities";
import Casestudy from "./Pages/Casestudy/Casestudy";
import CasePro from "./Pages/Cases/Case01/CasePro";
import Process from "./Pages/Process/Process";
import CaseBanner from "./Section/CaseStudy/CaseBanner";
import { NavLink as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Land from "./Pages/Landing page/Land";
import Mission from "./Section/Mission/Mission";
import Cinecio from "./Pages/Cases/Case02/Cinecio";
import Squre from "./Pages/Cases/Case03/Squre";
import Success from "./Pages/Cases/Case04/Success";
import Contact from "./Pages/contact/Contact";
import Navigations from "./Section/Navigation/Navigations";


function App() {
  return (
    <div className="App">
      <div className="MainSec">
        <Router>
        <Navigations />
          <Routes>
            <Route exact path="/"  element={<Land />} />
            <Route  path="/casestudy"  element={<Casestudy />} />
            <Route  path="/Cinecio"  element={<Cinecio />} />
            <Route  path="/Space"  element={<Squre />} />
            <Route  path="/success"  element={<Success />} />
            <Route  path="/casepro"  element={<CasePro />} />
            <Route  path="/client"  element={<Clients />} />
            <Route  path="/process"  element={<Process />} />
            <Route  path="/contact"  element={<Contact />} />
          </Routes>
        </Router>
        {/* <Navigation /> */}
        {/* <IntoSec />
        <Brief />*/}
        {/* <Achieve />
        <Case />
        <Projects />
        <Capabilities />
        <CaseBanner />  */}
        {/* <Clients /> */}
        {/* <Feedback />*/}
        <Footer />  

        {/* <Casestudy />
        <Process /> */}
      </div>
    </div>
  );
}

export default App;
