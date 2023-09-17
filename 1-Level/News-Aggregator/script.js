const API = fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bc0d1a8f943b4b0ca04fc8c1e590f0bc');

const articleTitle = document.getElementById('title');

API.then((response) => response.json())
        .then((data) => {
            console.log(data);
            articleTitle.textContent = data['articles'][0]['title'];

            console.log(articleTitle);
        })