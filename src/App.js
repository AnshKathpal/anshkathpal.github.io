import "./App.css";
import { Navbar } from "./Components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { TextSphere } from "./Components/TextSphere";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function App() {
  // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 };
const cursorXSpring = useSpring(cursorX, springConfig);
const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // const x = e.clientX - 16;
      // const y = e.clientY - 16;
      // setCursorXY({ x, y });

      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">
      {/* <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      /> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
