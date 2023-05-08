import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './styles/App.css';
import AnimatedCursor from 'react-animated-cursor';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export default function App({ routes }) {
  return (
    <div className="App">
      <AnimatedCursor
        color='58, 163, 216'
        outerAlpha={0.3}
        innerSize={13.5}
        outerSize={13.5}
        outerScale={6}
        innerScale={0.8}
        trailingSpeed={8}
      />
      <React.Fragment>
        <RouterProvider router={router} />
        <Footer />
      </React.Fragment>
    </div>
  );
}
