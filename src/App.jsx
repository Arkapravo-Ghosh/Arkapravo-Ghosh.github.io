import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import './styles/App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default function App({ routes }) {
  return (
    <div className="App">
      <React.Fragment>
        <RouterProvider router={router} />
        <Footer />
      </React.Fragment>
    </div>
  );
}
