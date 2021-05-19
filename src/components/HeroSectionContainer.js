import React from 'react'
import { useSpring, animated } from "react-spring";
import NavBar from './NavBar';
import Hero from './Hero';
function HeroSectionContainer() {
    const props = useSpring({ from: { opacity: 0, marginTop: -500 }, to: { opacity: 1, marginTop: 0 }, config: { delay: 1000, duration: 1000 } })
    return (
        <div class="relative bg-white overflow-hidden ">
            <div class=" max-w-sreen-xl mx-auto">
                <div class=" relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <NavBar />
                    <Hero />
                </div>
            </div>

            <animated.div style={props}>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt="say something" />
                </div>
            </animated.div>

        </div>
    )
}

export default HeroSectionContainer
