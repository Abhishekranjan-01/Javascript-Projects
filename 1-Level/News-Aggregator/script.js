const API = fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bc0d1a8f943b4b0ca04fc8c1e590f0bc');

// import axios from 'package.json';

const main = document.getElementById('main')

const articleSection = document.getElementById('article-section');
const articleTitle = document.getElementById('title');
const newsImage = document.getElementById('news-image');
const newsSource = document.getElementById('source');
const publishedAt = document.getElementById('date-time');
const newsArticle = document.getElementById('article-content');




console.log(articleSection);

API.then((response) => response.json())
        .then((data) => {
            console.log(data);
          let index=0;
            for(let articlex of data.articles){
              // console.log(articlex);

              const section = document.createElement('section');

              section.classList.add('bg-gray-200','flex','flex-col','justify-center','items-center','gap-5', 'rounded-xl','py-4','md:w-2/5','h-fit');
  
              section.innerHTML+= `                <h1 class="text-xl px-2 my-2 relative self-start w-full font-semibold font-['Poppins']" id="title">${data['articles'][index]['title']}</h1>
                  
              <div class="px-2 w-full">
                  <img class="rounded-xl" src="${data['articles'][index]['urlToImage']}" alt="Image Not Available Currently" id="news-image">
  
                  <div class="flex justify-between text-sm font-['Montserrat']">
                      <h2>Source: <span id="source">${data['articles'][index]['source']['name']}</span></h2>
                      <h2>Published On: <span id="date-time">${data['articles'][index]['publishedAt']}</span></h2>
                  </div>
  
              </div>
              
              <article class="px-2 text-md leading-tight font-['Poppins']" id="article-content">
                  ${data['articles'][index]['description']}
              </article>
          <h2 class="self-center"><span id="source-link"><a href="${data['articles'][index]['url']}" class="bg-sky-600 hover:bg-sky-700 hover:text-gray-50 duration-200 ease-in-out px-2 font-semibold text-gray-200 py-1 rounded-md">Know More</a></span></h2>`;
              
              
              // section.innerHTML+= articleSection.innerHTML;
              main.prepend(section);
              console.log(section);

              index++;
            }

            // articleTitle.textContent = data['articles'][2]['title'];

            // newsImage.src = data['articles'][2]['urlToImage'];

            // newsSource.textContent = data['articles'][2]['source']['name'];

            // publishedAt.textContent = new Date(`${data['articles'][2]['publishedAt']}`).toLocaleString() ;

            // newsArticle.textContent = data['articles'][2]['description'];

   
            // console.log(data['articles'][2]['content']);
            // return(data['articles'][0]['content']);

            

            // main.prepend(articleSection);



        })
           