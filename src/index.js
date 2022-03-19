import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectCarousel from './components/ProjectCarousel';

render(
  <HashRouter >
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
  </HashRouter>,
  document.getElementById("root")
);