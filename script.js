const posters = [
    {
        title: "Movie 1",
        genre: "Actcion",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://i.ebayimg.com/images/g/qbsAAOSwZOpkjEzl/s-l1200.jpg"
    },
    {
        title: "Movie 2",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://img.freepik.com/premium-psd/movie-poster-design-template_841014-16988.jpg?w=360"
    },
    {
        title: "Movie 3",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6agzulUL8qlhw0D7VbmB3o4yoajDyW7Yzg&usqp=CAU"
    },
    {
        title: "Movie 4",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5Afq1Od7UaHX8BGuz0Sa74A2QrVLbm4kww&usqp=CAU"
    },
    {
        title: "Movie 5",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxT4IHK0yp3vvOAHfnjdiGKEzc7SD2yHorA&usqp=CAU"
    },
    {
        title: "Movie 6",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR589TwvRl8QGFKc8chaMXG8F72mUgxmITTIg&usqp=CAU"
    },
    {
        title: "Movie 7",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZMLG9HUNwoF7PMmsiTpbmh64ouRumJ4VQ&usqp=CAU"
    },
    {
        title: "Movie 8",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1balXoBmdyhT6MwGFBDFFOnJ_zjJVFh-Gdg&usqp=CAU"
    },
    {
        title: "Movie 9",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEhc2scH-_2WR_sQrojczv-YNSFa8VCo3tw&usqp=CAU"
    },
    {
        title: "Movie 10",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskQBYqG6hgIGLyT1RWima8abpde-DMU8--A&usqp=CAU"
    },
    {
        title: "Movie 11",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WMZ2sTKG2chqbrXBsmkq69d0BorpsuBDiA&usqp=CAU"
    },
    {
        title: "Movie 12",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvwrS8qac1n0BVOy9IyedBPGqz9oonSVAKA&usqp=CAU"
    },
    {
        title: "Movie 13",
        genre: "Actcion",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwvbfRv3qY60Ktstcgn2_gw420zqCREUJGW627eZ3zCPt1WS-bImR1-uUw4fypzVloQI&usqp=CAU"
    },
    {
        title: "Movie 14",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKeGwbUcOBLf59gowaN8JO5_5qQ3TSYSGbK0DDqp0MWZoO0oKYurxKQktfm2HtJBMYuU&usqp=CAU"
    },
    {
        title: "Movie 15",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6agzulUL8qlhw0D7VbmB3o4yoajDyW7Yzg&usqp=CAU"
    },
    {
        title: "Movie 16",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5Afq1Od7UaHX8BGuz0Sa74A2QrVLbm4kww&usqp=CAU"
    },
    {
        title: "Movie 17",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxT4IHK0yp3vvOAHfnjdiGKEzc7SD2yHorA&usqp=CAU"
    },
    {
        title: "Movie 18",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR589TwvRl8QGFKc8chaMXG8F72mUgxmITTIg&usqp=CAU"
    },
    {
        title: "Movie 19",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWZMLG9HUNwoF7PMmsiTpbmh64ouRumJ4VQ&usqp=CAU"
    },
    {
        title: "Movie 20",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1balXoBmdyhT6MwGFBDFFOnJ_zjJVFh-Gdg&usqp=CAU"
    },
    {
        title: "Movie 21",
        genre: "Action",
        releaseDate: "2023-05-12",
        rating: "8.5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEhc2scH-_2WR_sQrojczv-YNSFa8VCo3tw&usqp=CAU"
    },
    // Add more movie objects here
];

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
             Released: ${poster.releasedDate}<br>
             Rating: ${poster.rating}</p>
         `;

         

         // Append the list item to the selected movies list
        selectedMoviesList.appendChild(listItem);
    });



    posterContainer.appendChild(posterElement);
});
