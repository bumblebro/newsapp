import { useEffect, useState } from "react";
import Newsapi from "../services/Newsapi";
import Guardianapi from "../services/Guardianapi";
import Nytspi from "../services/Nytapi";

function Home() {
  useEffect(() => {
    async function news() {
      // const source1 = await Newsapi();
      // console.log(source1);
      // const source2 = await Guardianapi();
      // console.log(source2);
      const source3 = await Nytspi();
      // console.log(source3);
    }
    news();
  }, []);

  return <div></div>;
}

export default Home;
