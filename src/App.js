import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/Nav'
import Experience from './components/experience/experience';
import Projects from './components/projects/Project';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <About />
      <Experience/>
      <Projects />
      <Footer />
      {/* <Nav />*/}
    </>
  );
}

export default App;
