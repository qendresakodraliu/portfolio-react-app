
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
