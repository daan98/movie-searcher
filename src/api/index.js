const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
};

const getMovieData = async (searchTerm) => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false`,
      options
    )
      .then((response) => response.json())
      .then((data) => data);

    let modifiedResult = [];

    result.results.map((movie) => {
      modifiedResult.push({
        id: movie.id,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        title: movie.title,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
      });
    });

    return modifiedResult;
  } catch (error) {
    console.log(
      "There was an error while fetching data from getMovieData: ",
      error
    );
  }
};

const getVideos = async (movieId) => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    )
      .then((response) => response.json())
      .then((data) => data);

    let modifiedResult = [];

    await result.results.map((trailer) => {
      modifiedResult.push(trailer);
    });

    const url = getSingleVideo(modifiedResult);

    return url;
  } catch (error) {
    console.log("There was an error while fetching data from getVideo", error);
  }
};

const getSingleVideo = (trailers) => {
  let currentTrailer;

  if (trailers.length > 0) {
    currentTrailer = trailers.filter(
      (movieTrailer) => movieTrailer.type == "Trailer"
    );

    if (currentTrailer.length === 0) {
      currentTrailer = trailers.filter(
        (movieTrailer) => movieTrailer.type == "Teaser"
      );
    }

    if (currentTrailer.length === 0) {
      currentTrailer = trailers;
    }
  }

  const url = currentTrailer
    ? `https://www.youtube.com/watch?v=${currentTrailer[0].key}`
    : null;
  return url;
};

export { getMovieData, getVideos };
