import axios from "axios";

//added api directly so that is easy to use it in docker
async function Guardianapi(input) {
  const result = await axios(
    `https://content.guardianapis.com/search?q=${input}&api-key=243914e8-8901-4435-8d44-80573fdbe98d&page-size=20`
  );
  const data = await result.data;
  return {
    totalarticles: data.response.total,
    articles: data.response.results,
  };
}

export async function Guardianapibycategory(category) {
  let url = `https://content.guardianapis.com/search?section=${category}&api-key=243914e8-8901-4435-8d44-80573fdbe98d&page-size=20`;
  const result = await axios(url);
  const data = await result.data;
  return {
    totalarticles: data.response.total,
    articles: data.response.results,
  };
}

export default Guardianapi;
