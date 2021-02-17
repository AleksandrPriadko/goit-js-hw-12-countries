import './styles.css';
import './js/fetchCountries';

// fetch("http://hn.algolia.com/api/v1/search?query=html&tags=story").then(rs => rs.json).then(data => console.log(data))

const apiKey = 'aec8c3a5f51e439f9017f9d28555d3ea';
const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;
const options = {
    headers: {
        Authorization: apiKey,
    },
};
fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data.articles))
    .catch(error => console.log(error));


