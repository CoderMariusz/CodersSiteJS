import React, { lazy, Suspense } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));
const Intro = lazy(() => import('./components/Intro'));
const Reviews = lazy(() => import('./components/Reviews'));

export default function homePage() {
  return (
    <main>
      <Suspense fallback={<p>loading...</p>}>
        <Hero />
        <Intro />
        <Reviews />
        <Contact/>
        <Footer/>
      </Suspense>
    </main>
  );
}
