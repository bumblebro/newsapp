import axios from "axios";

async function Nytspi() {
  const result = await axios(
    "https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=kVHNEPYCItXyZfW8JtDGXDLdtJAbijPc"
  );
  console.log(result);
  const data = await result.data;
  console.log(data);
  // return {
  //   totalarticles: data.response.total,
  //   articles: data.response.results,
  // };
}

export default Nytspi;
