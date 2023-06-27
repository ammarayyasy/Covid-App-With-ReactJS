import axios from "axios";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Regions from "../components/Regions";
import ENDPOINTS from "../utils/constants/endpoints";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [globals, setGlobals] = useState([]); 
  const [regions, setRegions] = useState([]); 

  useEffect(() => {
    getGlobalData();
  }, []);

  async function getGlobalData() {
    const response = await axios(ENDPOINTS.GLOBAL);
    setGlobals(response.data.global);
    setRegions(response.data.regions);
  }

  return (
    <main>
      <Hero />
      <Global datas={globals} title="Global"/>
      <Regions datas={regions}/>
    </main>
  );
}

export default Home;
