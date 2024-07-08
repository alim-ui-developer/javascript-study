const COUNTRY = 'kr';
const API_KEY = '1b17a188b790486989053206c1e446ef&pageSize=1';
let news = [];

const getLatestNews = async () => {
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`); // 참고: https://developer.mozilla.org/ko/docs/Web/API/URL
  const response = await fetch(url);
  const data = await response.json();

  news = data.articles;

  console.log("NEWS!!!!", news);
}

getLatestNews();