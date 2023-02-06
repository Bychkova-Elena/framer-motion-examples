import React from 'react';
import './App.css';
import {Example1} from "./сomponents/Example1/Example1";
import {Example2} from "./сomponents/Example3/Example2";
import {Example3} from "./сomponents/Example4/Example3";
import {Example4} from "./сomponents/Example2/Example4";
import {Example5} from "./сomponents/Example5/Example5";
import {motion, useScroll, useSpring} from "framer-motion";
import {Example6} from "./сomponents/Example6/Example6";

function App() {

    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 25 })

  return (
    <div className="App">
        {/*<motion.div style={{ scaleX }} className='progress-bar'/>*/}
      <Example1 />
        <Example4 />
        <Example2 />
        <Example3 />
      <Example5 />
        {/*<Example6 />*/}
    </div>
  );
}

export default App;
