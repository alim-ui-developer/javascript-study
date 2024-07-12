const API_URL = 'https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines';
// const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_KEY = '1b17a188b790486989053206c1e446ef';
const COUNTRY = 'us';

// let url = new URL(`${API_URL}?country=${COUNTRY}&apiKey=${API_KEY}`);
let url = new URL(`${API_URL}?country=${COUNTRY}`);
let newsList = [];
let category = '';

const resultTextArea = document.querySelector('.resultText');

const gnb = document.querySelectorAll(".gnb li");

gnb.forEach((menu) => 
  menu.addEventListener("click", (event) => getNewsByCategory(event))
)

const printLength = (word, list) => {
  if(!word){
    return resultTextArea.textContent = '';
  };

  if( list.length === 0 ){
    resultTextArea.textContent = '';
    return document.querySelector('.resultNullBox').innerHTML = `<p><em>${word}</em> 관련 기사가 없습니다.</p>`;
  }else{
    return resultTextArea.innerHTML = `<em>${word}</em> 관련 기사 (총 ${list.length}건)`
  }
}

const getNews = async (word) => {
  try{
    const response = await fetch(url);
    const data = await response.json();
    if(response.status === 200){
      printLength(word, data.articles);
      newsList = data.articles;
      render();
    }else{
      throw new Error(data.message);
    }
  }catch(error){
    errorRender(error.message);
  }
  
}

const getLatestNews = async () => {
  // url = new URL(`${API_URL}?country=${COUNTRY}&apiKey=${API_KEY}`); // 참고: https://developer.mozilla.org/ko/docs/Web/API/URL
  url = new URL(`${API_URL}?country=${COUNTRY}`)
  
  getNews();

  
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


const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  console.log(category)
  getNews(category);
}

const keywordSearch = async (event) => {
  const searchInput = document.querySelector("header .searchBox input[type='search']");
  let keyword = searchInput.value;

  if(!keyword){
    return alert('검색어를 입력해주세요');
  }
  
  event.preventDefault();
  searchInput.value = "";

  url = new URL(`${API_URL}?q=${keyword}`);
  getNews(keyword);
} 

const render = () => {
  const newsHTML = newsList.map((news) => `
    <div class="news">
      <p class="image-area">
        <img
          src=${ news.urlToImage }
          onError="this.onerror=null; this.src='https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'"
          alt=""
          class="news-img-size"
        />
      </p>
      <div class="text-area">
        <h2>${ news.title }</h2>
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

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`;

  document.getElementById("news-board").innerHTML = errorHTML;
}

getLatestNews();