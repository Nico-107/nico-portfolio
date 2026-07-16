import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Languages } from './components/Languages';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Languages />
        <Education />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
