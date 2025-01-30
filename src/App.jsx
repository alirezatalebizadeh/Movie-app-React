import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/search'
import Snipper from "./components/snipper"
import MovieCard from './components/MovieCard'




const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: "GET",
  Headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movieList, setMovieList] = useState([
    {
      "adult": false,
      "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
      "genre_ids": [
        28,
        878,
        35,
        10751
      ],
      "id": 939243,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 3",
      "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
      "popularity": 4279.584,
      "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
      "release_date": "2024-12-19",
      "title": "Sonic the Hedgehog 3",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 1223
    },
    {
      "adult": false,
      "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
      "genre_ids": [
        28,
        878,
        12,
        14,
        53
      ],
      "id": 539972,
      "original_language": "en",
      "original_title": "Kraven the Hunter",
      "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
      "popularity": 2363.201,
      "poster_path": "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
      "release_date": "2024-12-11",
      "title": "Kraven the Hunter",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 898
    },
    {
      "adult": false,
      "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
      "genre_ids": [
        28,
        35
      ],
      "id": 993710,
      "original_language": "en",
      "original_title": "Back in Action",
      "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
      "popularity": 2292.182,
      "poster_path": "/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
      "release_date": "2025-01-15",
      "title": "Back in Action",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 610
    },
    {
      "adult": false,
      "backdrop_path": "/vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        35,
        9648
      ],
      "id": 1241982,
      "original_language": "en",
      "original_title": "Moana 2",
      "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
      "popularity": 2500.449,
      "poster_path": "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
      "release_date": "2024-11-21",
      "title": "Moana 2",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 1036
    },
    {
      "adult": false,
      "backdrop_path": "/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 1249289,
      "original_language": "en",
      "original_title": "Alarum",
      "overview": "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
      "popularity": 1651.059,
      "poster_path": "/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
      "release_date": "2025-01-16",
      "title": "Alarum",
      "video": false,
      "vote_average": 5.815,
      "vote_count": 65
    },
    {
      "adult": false,
      "backdrop_path": "/h7r6LZ32dgLwtwSW3CxoWIYD9pr.jpg",
      "genre_ids": [
        27,
        14
      ],
      "id": 426063,
      "original_language": "en",
      "original_title": "Nosferatu",
      "overview": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
      "popularity": 1504.808,
      "poster_path": "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
      "release_date": "2024-12-25",
      "title": "Nosferatu",
      "video": false,
      "vote_average": 6.613,
      "vote_count": 1658
    },
    {
      "adult": false,
      "backdrop_path": "/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg",
      "genre_ids": [
        12,
        10751,
        16
      ],
      "id": 762509,
      "original_language": "en",
      "original_title": "Mufasa: The Lion King",
      "overview": "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
      "popularity": 1122.688,
      "poster_path": "/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
      "release_date": "2024-12-18",
      "title": "Mufasa: The Lion King",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 903
    },
    {
      "adult": false,
      "backdrop_path": "/hAQnXxOwCjgYcKRgTdYPRC8neqL.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 811941,
      "original_language": "te",
      "original_title": "దేవర: Part 1",
      "overview": "Devara, a fearless man from a coastal region, embarks on a perilous journey into the treacherous world of the sea to safeguard the lives of his people. Unbeknownst to him, his brother Bhaira is plotting a conspiracy against him. As events unfold, Devara passes on his legacy to his mild-mannered and timid son, Varada.",
      "popularity": 1074.723,
      "poster_path": "/A9ENz6d4lC3UYOX8Z1gJwDEo1sM.jpg",
      "release_date": "2024-09-26",
      "title": "Devara: Part 1",
      "video": false,
      "vote_average": 7.0,
      "vote_count": 49
    },
    {
      "adult": false,
      "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
      "genre_ids": [
        28,
        12,
        18
      ],
      "id": 558449,
      "original_language": "en",
      "original_title": "Gladiator II",
      "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
      "popularity": 1017.922,
      "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      "release_date": "2024-11-05",
      "title": "Gladiator II",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 2567
    },
    {
      "adult": false,
      "backdrop_path": "/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 912649,
      "original_language": "en",
      "original_title": "Venom: The Last Dance",
      "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
      "popularity": 999.815,
      "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
      "release_date": "2024-10-22",
      "title": "Venom: The Last Dance",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 2582
    },
    {
      "adult": false,
      "backdrop_path": "/cA88pwGnHa64BBcU3R1oCcJH9Qc.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 970450,
      "original_language": "en",
      "original_title": "Werewolves",
      "overview": "A year after a supermoon’s light activated a dormant gene, transforming humans into bloodthirsty werewolves and causing nearly a billion deaths, the nightmare resurfaces as the supermoon rises again. Two scientists attempt to stop the mutation but fail and must now struggle to reach one of their family homes.",
      "popularity": 955.926,
      "poster_path": "/cRTctVlwvMdXVsaYbX5qfkittDP.jpg",
      "release_date": "2024-12-04",
      "title": "Werewolves",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 244
    },
    {
      "adult": false,
      "backdrop_path": "/pqulyfkug9A7TmmRn5zrbRA8TAY.jpg",
      "genre_ids": [
        28,
        35
      ],
      "id": 1255788,
      "original_language": "fr",
      "original_title": "Le Jardinier",
      "overview": "Every year the Prime Minister has a list of all kinds of troublemakers eliminated in the name of the famous Reason of State. Serge Shuster, Special Adviser to the President of the Republic, finds himself on this list, better known as the Matignon List.  Condemned to certain death and at the heart of an implacable plot and a state secret that also put his family in danger, Serge, his wife and children have only one hope left - their gardener, Léo, who hates it when « slugs » invade his garden... Especially those that want to kill innocent families.",
      "popularity": 1112.879,
      "poster_path": "/5T9WR7vIOnHm6xhVt5zBuPbBgt1.jpg",
      "release_date": "2025-01-30",
      "title": "The Gardener",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 19
    },
    {
      "adult": false,
      "backdrop_path": "/uOQgMhYyu7dkXdHoRkCqZIF32M6.jpg",
      "genre_ids": [
        28,
        12
      ],
      "id": 1241320,
      "original_language": "ja",
      "original_title": "キングダム　大将軍の帰還",
      "overview": "Depicts a continuation of the \"Battle of Mayang\", an all-out war against the neighboring country Zhao that Shin and Wang Ki fought in in the previous work \"Flame of Fate\".",
      "popularity": 778.012,
      "poster_path": "/qZKKwXyZ92K0mIRpf2FbCkQa7oO.jpg",
      "release_date": "2024-07-12",
      "title": "Kingdom IV: Return of the Great General",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 87
    },
    {
      "adult": false,
      "backdrop_path": "/3WnoZw50qIfXsFnKr0LddEh5Jnf.jpg",
      "genre_ids": [
        10752,
        36,
        18
      ],
      "id": 1222248,
      "original_language": "no",
      "original_title": "Nr. 24",
      "overview": "On the brink of the Second World War, a young Norwegian man's drive to resist the Nazis sets a new course for his future – and the future of his country.",
      "popularity": 719.038,
      "poster_path": "/rzsmKSFEsEWBLbJ968abffnfYZ7.jpg",
      "release_date": "2024-10-30",
      "title": "Number 24",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 169
    },
    {
      "adult": false,
      "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
      "genre_ids": [
        27,
        878
      ],
      "id": 933260,
      "original_language": "en",
      "original_title": "The Substance",
      "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      "popularity": 691.456,
      "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
      "release_date": "2024-09-07",
      "title": "The Substance",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 3481
    },
    {
      "adult": false,
      "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
      "genre_ids": [
        28,
        14,
        35
      ],
      "id": 845781,
      "original_language": "en",
      "original_title": "Red One",
      "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous tracker in a globe-trotting, action-packed mission to save Christmas.",
      "popularity": 685.903,
      "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
      "release_date": "2024-10-31",
      "title": "Red One",
      "video": false,
      "vote_average": 7.113,
      "vote_count": 2190
    },
    {
      "adult": false,
      "backdrop_path": "/i3e7uwZOXks3PMvTOf4yQXbNxkI.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1081012,
      "original_language": "en",
      "original_title": "Aftermath",
      "overview": "A returning war veteran, stricken with PTSD, gets trapped with his teenage sister on Boston's Tobin Memorial Bridge when a heavily armed group of ex-military revolutionaries take everyone hostage.",
      "popularity": 662.871,
      "poster_path": "/gEHIVyJB9VWLF3cuJOpYjJjegd1.jpg",
      "release_date": "2024-09-27",
      "title": "Aftermath",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 62
    },
    {
      "adult": false,
      "backdrop_path": "/ie8OSgIHEl6yQiGJ90dsyBWOpQA.jpg",
      "genre_ids": [
        16,
        14,
        28,
        12
      ],
      "id": 839033,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The War of the Rohirrim",
      "overview": "A sudden attack by Wulf, a clever and traitorous lord of Rohan seeking vengeance for the death of his father, forces Helm Hammerhand, the King of Rohan, and his people to make a daring last stand in the ancient stronghold of the Hornburg.",
      "popularity": 594.907,
      "poster_path": "/cXzCOx1hUuU9CfmiEv6rXjb6EqU.jpg",
      "release_date": "2024-12-05",
      "title": "The Lord of the Rings: The War of the Rohirrim",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 377
    },
    {
      "adult": false,
      "backdrop_path": "/5o4iH2N4jX3HmNCBbC6rJqxtWj2.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1222064,
      "original_language": "en",
      "original_title": "River of Blood",
      "overview": "Four kayakers take the wrong river into a jungle inhabited by a tribe of merciless cannibals.",
      "popularity": 618.7,
      "poster_path": "/7lkm4eAvHy1uCs48GEwMxgwNdgd.jpg",
      "release_date": "2024-08-29",
      "title": "River of Blood",
      "video": false,
      "vote_average": 6.0,
      "vote_count": 18
    },
    {
      "adult": false,
      "backdrop_path": "/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
      "genre_ids": [
        18,
        10749,
        14
      ],
      "id": 402431,
      "original_language": "en",
      "original_title": "Wicked",
      "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
      "popularity": 652.039,
      "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
      "release_date": "2024-11-20",
      "title": "Wicked",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 1544
    }
  ]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  const searchMovies = async () => {
    setIsLoading(true)
    setErrorMessage("")

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }





  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>





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
