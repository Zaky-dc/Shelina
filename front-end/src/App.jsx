import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
     <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Qualifications />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
   
  )
}

export default App
