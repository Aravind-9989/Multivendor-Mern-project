import React from 'react'
import LandingPage from './vendor-dashboard/pages/landingpage'
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import NavBar from "../src/vendor-dashboard/components/Navbar"
import Login from '../src/vendor-dashboard/components/forms/Login'
import NotFound from './vendor-dashboard/components/Notfound'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = {<LandingPage />}/>
          <Route path='/*' element = {<NotFound />} />
      </Routes>
    </div>
  )
}

export default App