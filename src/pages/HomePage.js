import 'bootstrap/dist/css/bootstrap.css';
import About from '../Components/About/About';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import Nav from '../Components/Navbar/Navbar';
import Skills from '../Services/Skills';
import Projects from '../Components/Projects/Projects';
import Footer from '../Components/Footer/Footer';


function HomePage() {
  return (
    <div className="App">
        <Nav/>
        <HomeBanner/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default HomePage;
