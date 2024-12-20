import axios from "axios";

async function Guardianapi() {
  const result = await axios(
    "https://content.guardianapis.com/search?page=10&q=football&api-key=243914e8-8901-4435-8d44-80573fdbe98d"
  );
  const data = await result.data;
  return {
    totalarticles: data.response.total,
    articles: data.response.results,
  };
}

export default Guardianapi;
