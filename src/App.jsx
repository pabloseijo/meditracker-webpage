import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import StatsData from "./data/stats.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { UseCases } from "./components/UseCases";
import { ImpactStats } from "./components/ImpactStats";
import { DashboardWrapper } from "./components/DashboardWrapper";
import Dashboard from "./components/Dashboard";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />


      <Dashboard />

      <Features data={landingPageData.Features} />
      <UseCases data={landingPageData.UseCases} />
      <Services data={landingPageData.Services} />
      <ImpactStats data={StatsData} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
