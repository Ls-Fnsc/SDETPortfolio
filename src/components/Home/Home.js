import React, { useState, useEffect, useRef } from "react";
import './Home.css';

import VANTA from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xbff00,
          backgroundColor: 0x131A43,
          spacing: 20.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  
  return (
    <div>
      <section ref={vantaRef} className="homeContainer" id="scrollHome">
        <span>Hi, my name is</span>
        <h1>Luis Antonio Fonseca.</h1>
        <h2>And I like to break software.</h2>
        <p>
          I'm a Quality Assurance Analyst based in Guatemala City, Guatemala. I have 2.5 years of experience in manual testing and 6 months of experience with mobile test automation.
          I'm a geek at heart, that pays close attention to details who loves playing around with software. I'm well-organized, very good comunicator and a problem solver.
        </p>
        <a href="#scrollAbout">
          <button className="callToAction">
            MORE ABOUT ME!
          </button>
        </a>
      </section>
    </div>
  );
};
