import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import {Helmet} from "react-helmet";

function App() {
  return (
   
    <div className="App">
       <Helmet>
        <title>Blue Collar Garage</title>
        <meta name=" Blue Collar Garage A Licensed And Insured Mechanic Shop" content="Auto Repair Shop"/>
       </Helmet>
      <NavBar />
      <Banner />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
