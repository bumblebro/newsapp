import axios from "axios";

async function Newsapi() {
  const result = await axios(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-11-19&sortBy=publishedAt&apiKey=383085d771914007a402ed8e95ffe29c"
  );
  const data = await result.data;
  // console.log(data);
  return {
    totalarticles: data.totalResults,
    articles: data.articles,
  };
}

export default Newsapi;
