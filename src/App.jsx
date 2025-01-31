import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search'
import Snipper from "./components/snipper"
import MovieCard from './components/MovieCard'




// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWRhZmMwZjA5Mzk4ZjU1YTFmNDJiNDgzYzJjNDZlMCIsIm5iZiI6MTczODIzMDMzNi4xNTY5OTk4LCJzdWIiOiI2NzliNGE0MDM2NTg2NzUzNWFiZDdmMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.viOojWe6cX_y_3zt6pie3rKGJ6844hoHoJKJHpR-BAE",
//     "Content-Type": "application/json"
//   }
// }



function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const searchMovie = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWRhZmMwZjA5Mzk4ZjU1YTFmNDJiNDgzYzJjNDZlMCIsIm5iZiI6MTczODIzMDMzNi4xNTY5OTk4LCJzdWIiOiI2NzliNGE0MDM2NTg2NzUzNWFiZDdmMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.viOojWe6cX_y_3zt6pie3rKGJ6844hoHoJKJHpR-BAE",
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
      }

      const data = await response.json();
      await setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error searching movies: ${error}`);
      setErrorMessage("خطا در دریافت اطلاعات. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }

  }

  
  const fetchdata = async () => {
    const url = "https://api.themoviedb.org/4/list/1";
    setIsLoading(true); // شروع بارگذاری
    setErrorMessage("");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWRhZmMwZjA5Mzk4ZjU1YTFmNDJiNDgzYzJjNDZlMCIsIm5iZiI6MTczODIzMDMzNi4xNTY5OTk4LCJzdWIiOiI2NzliNGE0MDM2NTg2NzUzNWFiZDdmMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.viOojWe6cX_y_3zt6pie3rKGJ6844hoHoJKJHpR-BAE",
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);


      setMovieList(data?.results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  //!=========>>> when user type anything , fetch data from server
  useEffect(() => {
    fetchdata()
  }, [])

  useEffect(() => {
    searchMovie(searchTerm)
  }, [searchTerm])





  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {
          trendingMovies.length > 0 && (
            <section className='mt-20'>
              <h2 className='text-2xl font-bold text-white sm:text-3xl'>Trending Movies</h2>

              <ul className='flex flex-row overflow-y-auto gap-5 -mt-10 w-full hide-scrollbar'>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.$id} className='min-w-[230px] flex flex-row items-center'>
                    <p className='fancy-text mt-[22px] text-nowrap'>{index + 1}</p>
                    <img className='w-[127px] h-[163px] rounded-lg object-cover -ml-3.5' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `/no-image.png`} alt={movie.title} />
                  </li>
                ))}
              </ul>
            </section>
          )
        }

        //!All movied section
        <section className='space-y-9'>
          <h2>All Movies</h2>
          {
            isLoading ? (<Snipper />) : errorMessage ?
              <p className='text-red-500'>{errorMessage}</p> :
              (
                <ul className='grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {movieList.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </ul>
              )
          }

        </section>
      </div>
    </main>
  )
}

export default App
