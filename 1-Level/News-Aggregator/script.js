const main = document.getElementById('main')

const continent = document.getElementById('continent')
const articleSection = document.getElementById('article-section');
const articleTitle = document.getElementById('title');
const newsImage = document.getElementById('news-image');
const newsSource = document.getElementById('source');
const publishedAt = document.getElementById('date-time');
const newsArticle = document.getElementById('article-content');


const searchButton = document.querySelector('[type=search]');
const searchNews = document.querySelector('[placeholder=Search-News]');

searchButton.addEventListener('click',(e)=>{

  const topic = searchNews.value;
  callApi(topic);

})

const val =`https://newsapi.org/v2/everything?q=Apple&apiKey=bc0d1a8f943b4b0ca04fc8c1e590f0bc`;



function callApi(topic='technology'){
 
  const URL = `https://newsapi.org/v2/everything?q=${topic}&apiKey=bc0d1a8f943b4b0ca04fc8c1e590f0bc`;
  const API = fetch(URL);

  API.then((response) => response.json())
  .then((data) => {
      console.log(data);
    
    main.textContent = '';
    let index=0;
      for(let articlex of data.articles){
        // console.log(articlex);

        const section = document.createElement('section');

        section.classList.add('bg-gray-200','flex','flex-col','justify-center','items-center','gap-5', 'rounded-xl','py-4','md:w-2/5','h-fit');

        section.innerHTML= `                <h1 class="text-xl px-2 my-2 relative self-start w-full font-semibold font-['Poppins']" id="title">${articlex['title']}</h1>
            
        <div class="px-2 w-full">
            <img class="rounded-xl" src="${articlex['urlToImage']}" alt="Image Not Available Currently" id="news-image">

            <div class="flex justify-between text-sm font-['Montserrat']">
                <h2>Source: <span id="source">${articlex['source']['name']}</span></h2>
                <h2>Published On: <span id="date-time">${new Date(articlex['publishedAt']).toLocaleString()}</span></h2>
            </div>

        </div>
        
        <article class="px-2 text-md leading-tight font-['Poppins']" id="article-content">
            ${articlex['description']}
        </article>
    <h2 class="self-center"><span id="source-link"><a href="${articlex['url']}" class="bg-sky-600 hover:bg-sky-700 hover:text-gray-50 duration-200 ease-in-out px-2 font-semibold text-gray-200 py-1 rounded-md">Know More</a></span></h2>`;
        
        
        // section.innerHTML+= articleSection.innerHTML;
        main.prepend(section);
        // console.log(section);

        index++;

      }
  })


}

callApi('asia');
// Fetching News For Specefic Continent

continent.addEventListener("change",()=>{
  callApi(continent.value);
})