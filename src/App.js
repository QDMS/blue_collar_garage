import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
