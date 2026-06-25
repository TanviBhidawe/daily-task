function searchMovie() {

let movie = document.getElementById("searchBox").value.trim();

if (movie === "") {alert("Enter movie name");return;
}

fetch(`https://www.omdbapi.com/?apikey=9cb2860b&s=${movie}`)
.then(function(response) {
return response.json();
})
.then(function(data) {
if (!data.Search) {
document.getElementById("movies").innerHTML ="<h2>Movie Not Found</h2>";
return;}

let output = "";

data.Search.forEach(function(movie) {
output += `
<div class="card">
<img src="${movie.Poster !== "N/A"? movie.Poster: "https://placehold.co/300x450?text=No+Poster"}">
<h3>${movie.Title}</h3>
<p>${movie.Year}</p>
<button onclick="showDetails('${movie.imdbID}')">Show Details</button>
<div id="${movie.imdbID}"></div>
</div>`;});
document.getElementById("movies").innerHTML =output;

})

.catch(function(error) {
console.log(error);
document.getElementById("movies").innerHTML ="<h2>Error Loading Movies</h2>";
});
}

function showDetails(id) {
fetch(`https://www.omdbapi.com/?apikey=9cb2860b&i=${id}`)
.then(function(response) {
return response.json();
})
.then(function(movie) {
document.getElementById(id).innerHTML =`
<div class="details">
<p><b>Rating:</b> ${movie.imdbRating}</p>
<p><b>Actors:</b> ${movie.Actors}</p>
<p><b>Plot:</b> ${movie.Plot}</p>
</div>
`;
})
.catch(function() {
alert("Error Loading Details");
});

}