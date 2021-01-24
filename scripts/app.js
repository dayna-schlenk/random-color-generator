let movies = [
    {
        title: 'Amadeaus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]

// let newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// let newMovies = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`
// })

let newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))