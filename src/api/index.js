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
    console.log("getMovieData data: ", result);
    return result;
  } catch (error) {
    console.log(
      "There was an error while fetching data from getMovieData: ",
      error
    );
  }
};

const getVideo = async (movieId) => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    )
      .then((response) => response.json())
      .then((data) => data);

    console.log("getVideo data: ", result);
    return result;
  } catch (error) {
    console.log("There was an error while fetching data from getVideo", error);
  }
};

export { getMovieData, getVideo };
