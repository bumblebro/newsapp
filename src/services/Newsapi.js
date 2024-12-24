import axios from "axios";

async function Newsapi(input) {
  const result = await axios(
    `https://newsapi.org/v2/everything?q=${input}&pageSize=20&sortBy=publishedAt&apiKey=383085d771914007a402ed8e95ffe29c`
  );
  const data = await result.data;
  return {
    totalarticles: data.totalResults,
    articles: data.articles,
  };
}

export default Newsapi;
