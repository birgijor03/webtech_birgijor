let limit = 9;

function fetchHomeData() {
    //API Endpoint: https://jsonplaceholder.typicode.com/posts

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        return response.json();
    })
    .then((posts) => {
        //console.log(posts);

        let container = document.getElementById("main-container");
        container.innerHTML = "";

        limit += 6;

        let i = 1;
        for (post of posts) {
            if (i <= limit && i < 100) {
                const article = document.createElement("article");
                const title = document.createElement("h1");
                title.textContent = post.title;
                const body = document.createElement("p");
                body.textContent = post.body;
                article.appendChild(title);
                article.appendChild(body);
                container.appendChild(article);
                if (i % 3 == 0) {
                    const clearfix = document.createElement("div");
                    clearfix.setAttribute("class", "clearfix");
                    container.appendChild(clearfix);
                }
            }
            i++;
        }
    })
}

window.onscrollend = function() {fetchHomeData();};