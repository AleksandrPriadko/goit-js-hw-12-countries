/* const apiKey = 'aec8c3a5f51e439f9017f9d28555d3ea';
function fetchArticles(searchQuery) {
    const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en`;

    const options = {
        headers: {
            Authorization: apiKey,
        },
    };

    return fetch(url, options)
        .then(res => res.json()).then(data => data.articles)
        .catch(error => console.log(error));
};

export default fetchArticles; */