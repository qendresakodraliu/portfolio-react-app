import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../Components/Navbar/Navbar';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

function ContactPage() {
  return (
    <div className="App">
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
