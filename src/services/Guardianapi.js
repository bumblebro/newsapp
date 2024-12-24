import axios from "axios";

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
  console.log(category);
  let url = `https://content.guardianapis.com/search?section=${category}&api-key=243914e8-8901-4435-8d44-80573fdbe98d&page-size=20`;
  console.log(url);
  const result = await axios(url);
  const data = await result.data;
  console.log(data);
  return {
    totalarticles: data.response.total,
    articles: data.response.results,
  };
}

// async function Guardianapi() {
//   // const result = await axios(
//   //   "https://content.guardianapis.com/search?page-size=100&api-key=243914e8-8901-4435-8d44-80573fdbe98d"
//   // );

//   const result = guardianres;
//   console.log(result);
//   return {
//     totalarticles: result.response.total,
//     articles: result.response.results,
//   };
// }

export default Guardianapi;
