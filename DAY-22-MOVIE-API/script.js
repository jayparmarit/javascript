async function searchMovie(){
    const query = document.getElementById("search").value;

    const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`)

    const data = await res.json();

    const moviesDiv = document.getElementById("moviesDiv")


    moviesDiv.innerHTML = "";



    if(data.Search){
        data.Search.forEach((movie) => {
            moviesDiv.innerHTML += `
            <div class="moviecard">
                <img src=${movie.Poster} alt="poster" />

                <h3>${movie.Title}</h3>

                <p>${movie.Year}</p>
                </div >
            `;
        });
    }else {
        moviesDiv.innerHTML = "<p>no movie data found</p>"
    }
}
