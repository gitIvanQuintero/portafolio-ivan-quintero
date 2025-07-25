// App.js
import './App.css';
import { Toaster } from 'react-hot-toast';
// Importaciones ordenadas por estructura
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth min-h-screen overflow-x-hidden bg-gradient-to-br from-[#e3f1ec] via-white to-[#d4eee4] text-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-gray-100 transition-colors duration-300">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#e6fffa',
              color: '#22543d',
              border: '1px solid #b2f5ea',
            },
            iconTheme: {
              primary: '#319795',
              secondary: '#ffffff',
            },
          },
          error: {
            style: {
              background: '#fff5f5',
              color: '#742a2a',
              border: '1px solid #fed7d7',
            },
          },
        }}
      />

      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido principal con padding horizontal global */}
      <main className="w-full">
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer separado del contenido principal */}
      <Footer />
    </div>
  );
}

export default App;
