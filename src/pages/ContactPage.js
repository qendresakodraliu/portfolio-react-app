import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/navbar/Navbar';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

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
