import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main
      className='App'
      data-bs-spy='scroll'
      data-bs-target='#toggleMobileMenu'
      data-bs-offset='0'
      tabIndex='0'
    >
      <BrowserRouter>
        <NavBar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
