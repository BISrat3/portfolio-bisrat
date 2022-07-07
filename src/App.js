import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Experience from './components/experience/experience';
import Projects from './components/projects/Project';
function App() {
  return (
    <>
      <Header />
      <About />
      <Experience/>
      <Projects />
      {/* <Nav />
      <Footer /> */}
    </>
  );
}

export default App;
