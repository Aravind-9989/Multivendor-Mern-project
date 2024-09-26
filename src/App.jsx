import React from 'react'
import LandingPage from '../src/dashboard/pages/landingpage'
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import NotFound from './dashboard/components/Notfound'

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