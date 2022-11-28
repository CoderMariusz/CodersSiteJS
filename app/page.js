import React, { lazy } from "react";
const Hero = lazy(()=>import("./components/Hero")) ;
const Intro = lazy(()=>import("./components/Intro")) ;
const Reviews = lazy(()=>import("./components/Reviews")) ;


export default function homePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Reviews/>
    </main>
  );
}
