// Question 4
// Let’s see we an api url www.example.com/api/get/1 
// Write a sample code to call this rest api and display the result.


const FetchData = (_ => {
  let searchQuery = "superman";
  const API_KEY = "c0c27d0ce6ae24581f452d663a20688b";

  const getMovies = _ => {
    const MOVIE_ENDPOINT = "https://api.themoviedb.org";
    const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&=en-US&query=${searchQuery}`;
    return fetch(MOVIE_URL)
      .then(res => res.json())
      .then(data => {
        const movies = [];
        data.results.forEach(movie => {
          let imgagePath = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          let obj = {
            title: movie.title,
            image: imgagePath
          };
          movies.push(obj);
        });
        return movies;
      });
  };

  const render = movies => {
    let markup = "";
    movies.forEach(movie => {
      console.log(movie);
      const { title, image: img } = movie;
      markup += `
    <div class="movies__item">
    <img src=${img} alt="movie poster" class="movies__image">
    <p class="movies__title">${title}</p>
    </div>
    `;
    });
    document.querySelector(".movies").innerHTML = markup;
  };

  getMovies().then(data => {
    render(data);
  });
})

export default FetchData;