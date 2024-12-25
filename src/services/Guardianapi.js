import axios from "axios";

async function Guardianapi(input) {
  try {
    const result = await axios(
      `https://content.guardianapis.com/search?q=${input}&api-key=243914e8-8901-4435-8d44-80573fdbe98d&page-size=20`
    );
    const data = result.data;
    return {
      totalarticles: data.response.total,
      articles: data.response.results,
    };
  } catch (error) {
    console.error("Error fetching data", error.message);
    throw new Error("Failed to fetch articles.");
  }
}

export async function Guardianapibycategory(category) {
  try {
    const url = `https://content.guardianapis.com/search?section=${category}&api-key=243914e8-8901-4435-8d44-80573fdbe98d&page-size=20`;
    const result = await axios(url);
    const data = result.data;
    return {
      totalarticles: data.response.total,
      articles: data.response.results,
    };
  } catch (error) {
    console.error("Error fetching data", error.message);
    throw new Error("Failed to fetch category articles.");
  }
}

export default Guardianapi;
