
import HeroSectionContainer from "./components/HeroSectionContainer";
import CardsContainer from "./components/CardsContainer";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import { useSpring, animated } from "react-spring";
import NavBar from "./components/NavBar";

function App() {
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { delay: 2500, duration: 2500 } })

  return (
    <div className="App">
      <HeroSectionContainer />

      <animated.div style={props}>
        <CardsContainer />

        <Feature />
        <Contact />

      </animated.div>
    </div>
  );
}

export default App;
