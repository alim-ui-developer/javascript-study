const COUNTRY = 'us';
const API_KEY = `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`;
let url = '';
let newsList = [];
let category = '';

const getLatestNews = async () => {
  // const url = new URL(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`); // 참고: https://developer.mozilla.org/ko/docs/Web/API/URL
  url = new URL(`https://alim-js-study.netlify.app/news/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`);
  // url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`)
  const response = await fetch(url);
  const data = await response.json();

  newsList = data.articles;
  render();
  console.log("NEWS!!!!", newsList);
}

const setPhrase = (text, len) => {
  if(text === null || text === ''){
    return '내용없음';
  }

  if(text.length > len) {
    return text.substr(0, len - 2) + '...';
  } 

  return text;
}

const categoryFilter = async (category) => {
  // url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?category=${category.toLowerCase()}`);
  url = new URL(`https://alim-js-study.netlify.app/news/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}&category=${category.toLowerCase()}`)
  const response = await fetch(url);
  const data = await response.json();
  if(data.articles.length !== 0){
    newsList = data.articles;
    render();
  }
  
}

const render = () => {
  const newsHTML = newsList.map((news) => `
      <div class="news">
        <p class="image-area">
          <img src=${ news.urlToImage ? news.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU' } alt="" class="news-img-size">
        </p>
        <div class="text-area">
          <h2>${news.title}</h2>
          <p>
            ${ setPhrase(news.description, 200) }
          </p>
          <ul>
            <li>${ news.source.name ? news.source.name : 'no source' }</li>
            <li>${ moment(news.publishedAt).format('llll') }</li>
          </ul>
        </div>      
    </div>
  `).join("");

  document.getElementById('news-board').innerHTML = newsHTML;
}

getLatestNews();