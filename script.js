const posters = [
    {
        title: "Inception",
        genre: "Psychological Thriller",
        releaseDate: "2010-07-15",
        rating: "8.8/10",
        imageUrl: "https://i.ebayimg.com/images/g/ftAAAOSw8SRg5Awx/s-l1600.jpg"
    },
    {
        title: "Farewell My Concubine",
        genre: "Period Drama",
        releaseDate: "1993-01-01",
        rating: "8.1/10",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYmFhZmM3Y2MtNDA1Ny00NjkzLWJkM2EtYWU1ZjEwYmNjZDQ0XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg"
    },
    {
        title: "The Hours",
        genre: "Drama",
        releaseDate: "2002-12-18",
        rating: "7.5/10",
        imageUrl: "https://image.tmdb.org/t/p/original/rCZzUmFs3pTClfxM6icshbKI92f.jpg"
    },
    {
        title: "Nang Nak",
        genre: "Horror",
        releaseDate: "1999-07-23",
        rating: "6.5/10",
        imageUrl: "https://asianwiki.com/images/7/7e/Nangnak.jpg"
    },
    {
        title: "Children of Heaven",
        genre: "Family",
        releaseDate: "1996-02-01",
        rating: "8.2/10",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq83-iirmBAA2peMW4TzXyxcKNP6ZR7eMqj7iWMJgokcqjmYLq"
    },
    {
        title: "Happy Together",
        genre: "Romance",
        releaseDate: "1997-05-31",
        rating: "7.7/10",
        imageUrl: "https://asianwiki.com/images/8/86/Happytogether.jpg"
    },
    {
        title: "Roh",
        genre: "Horror",
        releaseDate: "2020-08-06",
        rating: "6.0/10",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8f/Roh_2020_movie_poster.jpg"
    },
    {
        title: "Jurassic Park",
        genre: "Dinosaur Adventure",
        releaseDate: "1993-06-09",
        rating: "8.2/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1balXoBmdyhT6MwGFBDFFOnJ_zjJVFh-Gdg&usqp=CAU"
    },
    {
        title: "Annette",
        genre: "Romantic Epic",
        releaseDate: "2021-08-062",
        rating: "6.3/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEhc2scH-_2WR_sQrojczv-YNSFa8VCo3tw&usqp=CAU"
    },
    {
        title: "This Gun For Hire",
        genre: "Crime",
        releaseDate: "1942-05-13",
        rating: "7.4/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskQBYqG6hgIGLyT1RWima8abpde-DMU8--A&usqp=CAU"
    },
    {
        title: "Fear and Loathing in Las Vegas",
        genre: "Dark Comedy",
        releaseDate: "1998-05-22",
        rating: "7.5/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WMZ2sTKG2chqbrXBsmkq69d0BorpsuBDiA&usqp=CAU"
    },
    {
        title: "Frank",
        genre: "Quirky Comedy",
        releaseDate: "2014-09-12",
        rating: "6.9/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvwrS8qac1n0BVOy9IyedBPGqz9oonSVAKA&usqp=CAU"
    },
    {
        title: "Billy Elliot",
        genre: "Drama",
        releaseDate: "2000-09-28",
        rating: "7.7/10",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/31/Billy_Elliot_movie.jpg"
    },
    {
        title: "Amélie",
        genre: "Feel-Good Romance",
        releaseDate: "2001-04-25",
        rating: "8.3/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiABqqG-iP_i142Rdfl8vDVMD1aBu_nri9zLjJQ0aRi5WDd3uh1DPD8DO-zHz3Wy1p84&usqp=CAU"
    },
    {
        title: "Moonlight",
        genre: "Drama",
        releaseDate: "2016-10-21",
        rating: "7.4/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6agzulUL8qlhw0D7VbmB3o4yoajDyW7Yzg&usqp=CAU"
    },
    {
        title: "Jaws",
        genre: "Thriller",
        releaseDate: "1975-06-20",
        rating: "8.1/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5Afq1Od7UaHX8BGuz0Sa74A2QrVLbm4kww&usqp=CAU"
    },
    {
        title: "Bohemian Rhapsody",
        genre: "Musical",
        releaseDate: "2018-11-02",
        rating: "7.9/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxT4IHK0yp3vvOAHfnjdiGKEzc7SD2yHorA&usqp=CAU"
    },
    {
        title: "Nomadland",
        genre: "Drama",
        releaseDate: "2021-02-19",
        rating: "7.3/10",
        imageUrl: "https://artofthemovies.co.uk/cdn/shop/products/IMG_3865-337661_1024x1024@2x.jpg?v=1616190419"
    },
    {
        title: "The Silence of the Lambs",
        genre: "Crime",
        releaseDate: "1991-01-30",
        rating: "8.6/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZMLG9HUNwoF7PMmsiTpbmh64ouRumJ4VQ&usqp=CAU"
    },
    {
        title: "The Exorcist",
        genre: "Horror",
        releaseDate: "1973-12-26",
        rating: "8.1/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE1RR7fFtulXDHtt_pSAcp7u00yLxc01VzA&s"
    },
    {
        title: "28 Days Later",
        genre: "Horror",
        releaseDate: "2002-11-01",
        rating: "7.5/10",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e4/28_days_later.jpg"
    },
]

const posterContainer = document.querySelector('.poster-container');
const selectedMoviesList = document.getElementById('selected-movies-list');
const selectedMovies = new Set(); // Use a Set to track selected movies

posters.forEach(poster => {
    const posterElement = document.createElement('div');
    posterElement.classList.add('poster');

    posterElement.innerHTML = `
        <div class="poster-inner">
            <div class="poster-front" style="background-image: url(${poster.imageUrl});"></div>
            <div class="poster-back">
                <img src="${poster.imageUrl}" alt="movie poster">
                <h3>${poster.title}</h3>
                <p>Genre: ${poster.genre}</p>
                <p>Release Date: ${poster.releaseDate}</p>
                <p>Rating: ${poster.rating}</p>
            </div>
        </div>
           <button class="select-button">Favorite</button>`

     // Add click event to flip the poster
    posterElement.addEventListener('click', () => {
        posterElement.querySelector('.poster-inner').classList.toggle('is-flipped');
    });

    // Add click event to the select button to prevent the flip
    posterElement.querySelector('.select-button').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the flip when clicking the button
        
        // Check if the movie is already selected
        if (selectedMovies.has(poster.title)) {
            alert('This movie is already in your favorite list!')
            return
         }

         // Add the selected movie to the Set
        selectedMovies.add(poster.title);


         // Add the selected movie to the list on the right
         
         const listItem = document.createElement('li');
      
         listItem.innerHTML = `
             <img src="${poster.imageUrl}" alt="movie poster">
             <p><strong>${poster.title}</strong><br>
             Genre: ${poster.genre}<br>
             Release Date: ${poster.releaseDate}<br>
             Rating: ${poster.rating}</p>
         `;

         

         // Append the list item to the selected movies list
        selectedMoviesList.appendChild(listItem);
    });



    posterContainer.appendChild(posterElement);
});
