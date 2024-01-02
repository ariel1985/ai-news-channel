
var url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${NEWS_API_KEY}`;


console.log(url);

var req = new Request(url);

document.getElementById('source').innerHTML = url;

fetch(url)
.then(res => res.json())
.then(data => {

    console.log('data ', data)

    console.log('resutls', data.totalResults);

    const reponse = document.getElementById('response');

    for (let i = 0; i < data.articles.length; i++) {
        const elm = data.articles[1];
        console.log(elm);
        console.log(elm.author);
        console.log(elm.publishedAt);
        console.log(elm.title);
        console.log(elm.url);
        
        cardit(data.articles);
    }
})
.catch(err => { throw err });
 
function cardit(articles) {
  // Get the container element where we will add the cards
  const container = document.getElementById("response");
  
  // Loop through each article in the array and create a card element
  articles.forEach((article) => {

    // Create a new div element for the card
    const card = document.createElement("div");
    card.classList.add("card"); // Add a class to style the card with CSS
  
    // Create an h2 element for the article title
    const title = document.createElement("h2");
    title.textContent = article.title;
    card.appendChild(title); 
  
    const publishDate = document.createElement("sub");
    publishDate.textContent = article.publishedAt;
    card.appendChild(publishDate);

    // Create a p element for the article author and date
    const authorAndDate = document.createElement("p");
    authorAndDate.textContent = `By ${article.author} on ${article.publishAt}`;
    card.appendChild(authorAndDate); // Add the author and date to the card
  
    // Create an a element for the article URL
    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = "Read more";
    card.appendChild(link); // Add the link to the card
  
    // Add the card to the container element
    container.appendChild(card);
  });
}