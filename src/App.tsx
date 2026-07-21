import { Nav }       from './components/Nav';
import { Hero }      from './components/Hero';
import { Approach }  from './components/Approach';   /* "About" — spine of the site */
import { Journey }   from './components/Journey';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Projects }  from './components/Projects';
import { Contact }   from './components/Contact';
import { Footer }    from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Journey />
        <Education />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
