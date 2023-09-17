const API = fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bc0d1a8f943b4b0ca04fc8c1e590f0bc');

const articleTitle = document.getElementById('title');

const newsImage = document.getElementById('news-image');

const newsSource = document.getElementById('source');

const publishedAt = document.getElementById('date-time');

const newsArticle = document.querySelector('article');

API.then((response) => response.json())
        .then((data) => {
            console.log(data);
            articleTitle.textContent = data['articles'][0]['title'];

            newsImage.src = data['articles'][0]['urlToImage'];

            newsSource.textContent = data['articles'][0]['source']['name'];

            publishedAt.textContent = new Date(`${data['articles'][0]['publishedAt']}`).toLocaleString() ;

            newsArticle.textContent = data['articles'][0]['content'];

            // return(data['articles'][0]['content']);
        })
           