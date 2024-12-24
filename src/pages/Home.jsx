import { useEffect, useState } from "react";
import Guardianapi, { Guardianapibycategory } from "../services/Guardianapi";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import moment from "moment";
import NewsList from "../components/NewsList";
import PersonalizedNews from "../components/PersonalizedNews";
import Navbar from "../components/Navbar";
import Newsapi from "../services/Newsapi";

function Home() {
  const [input, setInput] = useState();
  const [news, setNews] = useState([]);
  const [button, setButton] = useState(true);
  const [filterednews, setFilteredNews] = useState([]);
  const [startdate, setStartDate] = useState(null);
  const [enddate, setEndDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [source, setSource] = useState(null);
  const [settings, setSettings] = useState(false);
  const [prefNews, setPrefNews] = useState([]);
  const [prefToggle, setPrefToggle] = useState(false);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     console.log(input);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [input]);

  useEffect(() => {
    // const arr = guardianres.response.results.map((item) => item.sectionName);
    // console.log(arr);
    setFilteredNews(news);
    if (category) {
      setFilteredNews((prev) =>
        prev.filter(
          (item) => item.section.toLowerCase() == category.toLowerCase()
        )
      );
    }
    if (startdate) {
      console.log(startdate);

      setFilteredNews((prev) =>
        prev.filter((item) => item.datePublished > startdate)
      );
    }
    if (enddate) {
      console.log(enddate);

      setFilteredNews((prev) =>
        prev.filter((item) => item.datePublished < enddate)
      );
    }
    if (source) {
      console.log(source);

      setFilteredNews((prev) =>
        prev.filter((item) => item.source.toLowerCase() == source.toLowerCase())
      );
    }
    console.log(filterednews);
  }, [startdate, enddate, category, source, news]);

  useEffect(() => {
    setPrefNews([]);
    const category = JSON.parse(localStorage.getItem("Categories"));
    const author = JSON.parse(localStorage.getItem("Authors"));
    const source = JSON.parse(localStorage.getItem("Sources"));

    const fetchData = async () => {
      console.log(source);
      // if (true) return;
      // if (settings == true) return;
      if (category == null && author == null && source == null) {
        const result = await Guardianapi("");
        console.log(result.articles);
        setPrefNews(
          result.articles.map((item) => {
            return {
              author: null,
              title: item.webTitle,
              url: item.webUrl,
              datePublished: moment(item.webPublicationDate)
                .utc()
                .format("YYYY-MM-DD"),
              section: item.sectionName,
              source: "guardian",
            };
          })
        );
        // const result2 = await Newsapi("Random");
        // console.log("result2", result2);
        // setPrefNews((prev) => [
        //   ...prev,
        //   ...result2.articles.map((item) => {
        //     return {
        //       author: item.author,
        //       title: item.title,
        //       url: item.url,
        //       datePublished: moment(item.publishedAt)
        //         .utc()
        //         .format("YYYY-MM-DD"),
        //       section: "Random",
        //       source: "newsapi",
        //     };
        //   }),
        // ]);

        return;
      }
      if (source?.includes("guardian")) {
        // if (source?.includes("guardian") && author.length == 0) {
        if (category.length > 0) {
          let allArticles = [];
          for (let item of category) {
            const result = await Guardianapibycategory(item);
            console.log(result.articles);
            allArticles = [
              ...allArticles,
              ...result.articles.map((item) => {
                return {
                  author: null,
                  title: item.webTitle,
                  url: item.webUrl,
                  datePublished: moment(item.webPublicationDate)
                    .utc()
                    .format("YYYY-MM-DD"),
                  section: item.sectionName,
                  source: "guardian",
                };
              }),
            ];
            console.log(allArticles);
          }
          setPrefNews(allArticles);
        } else {
          const result = await Guardianapi("");
          console.log(result.articles);
          setPrefNews((prev) => [
            ...prev,
            ...result.articles.map((item) => {
              return {
                author: null,
                title: item.webTitle,
                url: item.webUrl,
                datePublished: moment(item.webPublicationDate)
                  .utc()
                  .format("YYYY-MM-DD"),
                section: item.sectionName,
                source: "guardian",
              };
            }),
          ]);
        }
      }
      if (source?.includes("newsapi")) {
        if (category.length > 0) {
          let allArticles = [];
          for (let item of category) {
            console.log("true");
            const result = await Newsapi(item);
            console.log(result);
            console.log(result.articles);

            const filteredArticles = result.articles
              .filter(
                (item) => author.length === 0 || author.includes(item.author)
              )
              .map((item) => {
                return {
                  author: item.author,
                  title: item.title,
                  url: item.url,
                  datePublished: moment(item.publishedAt)
                    .utc()
                    .format("YYYY-MM-DD"),
                  section: null,
                  source: "newsapi",
                };
              });

            allArticles = [...allArticles, ...filteredArticles];
            console.log(allArticles);
          }
          setPrefNews((prev) => [...prev, ...allArticles]);
        } else {
          const result2 = await Newsapi("Random");
          console.log("result2", result2);
          setPrefNews((prev) => [
            ...prev,
            ...result2.articles
              .filter(
                (item) => author.length === 0 || author.includes(item.author)
              )
              .map((item) => {
                return {
                  author: item.author,
                  title: item.title,
                  url: item.url,
                  datePublished: moment(item.publishedAt)
                    .utc()
                    .format("YYYY-MM-DD"),
                  section: null,
                  source: "newsapi",
                };
              }),
          ]);
        }
      }
    };
    fetchData();
  }, [settings]);

  const searchByKeyword = async () => {
    const guardian = await Guardianapi(input);
    console.log(guardian);
    setNews(
      guardian.articles.map((item) => {
        return {
          author: null,
          title: item.webTitle,
          url: item.webUrl,
          datePublished: moment(item.webPublicationDate)
            .utc()
            .format("YYYY-MM-DD"),
          section: item.sectionName,
          source: "guardian",
        };
      })
    );
    const newsapi = await Newsapi(input);
    console.log(newsapi);
    setNews((prev) => [
      ...prev,
      ...newsapi.articles.map((item) => {
        return {
          author: item.author,
          title: item.title,
          url: item.url,
          datePublished: moment(item.publishedAt).utc().format("YYYY-MM-DD"),
          section: input,
          source: "newsapi",
        };
      }),
    ]);
    console.log(news);
  };

  return (
    <div className="w-full p-6 rounded-lg bg-gray-50 ">
      {settings ? (
        <PersonalizedNews
          setSettings={setSettings}
          setPrefToggle={setPrefToggle}
        />
      ) : (
        <>
          <Navbar setSettings={setSettings} />
          <SearchBar
            setInput={setInput}
            setButton={setButton}
            searchByKeyword={searchByKeyword}
            button={button}
          />

          {!button && (
            <Filter
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setCategory={setCategory}
              setSource={setSource}
              news={news}
            />
          )}
          {/* {input?.length > 0 ? (
            <NewsList news={filterednews} type={"search"} />
          ) : (
            <NewsList news={prefNews} type={"home"} />
          )} */}
          {filterednews.length == 0 && prefNews.length == 0 ? (
            <div className="mt-20 text-lg font-semibold  h-[100vh] text-center">
              Loading articles...
            </div>
          ) : input?.length > 0 ? (
            <NewsList news={filterednews} type={"search"} />
          ) : (
            <NewsList news={prefNews} type={"home"} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
