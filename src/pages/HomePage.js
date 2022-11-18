import 'bootstrap/dist/css/bootstrap.css';
import About from '../components/about/About';
import HomeBanner from '../components/homeBanner/HomeBanner';
import Nav from '../components/navbar/Navbar';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Footer from '../components/footer/Footer';


function HomePage() {
  return (
    <div className="App">
      <Nav />
      <HomeBanner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default HomePage;
