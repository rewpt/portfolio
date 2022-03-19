import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectCarousel from './components/ProjectCarousel';

render(
  <BrowserRouter >
    <Routes >
      <Route path="/" element={<App />}>
        <Route path="/projects" element={<ProjectCarousel />}>
        {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);