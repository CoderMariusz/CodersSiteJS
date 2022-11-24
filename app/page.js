import React, { lazy } from "react";
const Hero = lazy(()=>import("./components/Hero")) ;
const Intro = lazy(()=>import("./components/Intro")) ;


export default function homePage() {
  return (
    <main>
      <Hero />
      <Intro />
    </main>
  );
}
