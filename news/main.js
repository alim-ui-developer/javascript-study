const API_URL = 'https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines';
// const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '1b17a188b790486989053206c1e446ef';
const COUNTRY = 'us';

let url = '';
let newsList = [];
let category = '';

const resultTextArea = document.querySelector('.resultText');

const getLatestNews = async () => {
  // url = new URL(`${API_URL}?country=${COUNTRY}&apiKey=${API_KEY}`); // 참고: https://developer.mozilla.org/ko/docs/Web/API/URL
  url = new URL(`${API_URL}?country=${COUNTRY}`)
  const response = await fetch(url);
  const data = await response.json();

  newsList = data.articles;
  render();
  resultTextArea.textContent = '';
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
  // url = new URL(`${API_URL}?country=${COUNTRY}&apiKey=${API_KEY}&category=${category.toLowerCase()}`)
  url = new URL(`${API_URL}?category=${category.toLowerCase()}`);
  const response = await fetch(url);
  const data = await response.json();

  if(data.articles.length !== 0){
    newsList = data.articles;
    render();
    resultTextArea.innerHTML = `<em>${category}</em> 관련 기사 (총 ${data.articles.length}건)`;
  } 
}

const keywordSearch = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector("header .searchBox input[type='search']");
  let keyword = searchInput.value;

  url = new URL(`${API_URL}?q=${keyword}`);
  const response = await fetch(url);
  const data = await response.json();

  if(data.articles.length === 0){
    alert('검색 결과가 없습니다');
    return;
  }

  newsList = data.articles;
  render();
  searchInput.value = "";
  resultTextArea.innerHTML = `<em>${keyword}</em> 검색결과 (총 ${data.articles.length}건)`;
}

const render = () => {
  const newsHTML = newsList.map((news) => `
      <div class="news">
        <p class="image-area">
          <img
            src=${ news.urlToImage}
            onError="this.onerror=null; this.src='https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'"
            alt=""
            class="news-img-size"
          />
        </p>
        <div class="text-area">
          <h2>${news.title}</h2>
          <p>
            ${ setPhrase(news.description, 200) }
          </p>
          <ul class="copyright">
            <li class="source">${ news.source.name ? news.source.name : 'no source' }</li>
            <li class="date">${ moment(news.publishedAt).fromNow() }</li>
          </ul>
        </div>      
    </div>
  `).join("");

  document.getElementById('news-board').innerHTML = newsHTML;
}

getLatestNews();