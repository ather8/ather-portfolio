import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const isKnownRoute = window.location.pathname === "/";

  if (!isKnownRoute) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;