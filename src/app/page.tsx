import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";
import { getFeaturedMovie, getMoviesByGenre } from "../service/MovieService";

export default async function Home() {
  const featureMovie = await getFeaturedMovie( '102' )
  const genres = ['Drama', 'Action', 'Animation', 'Comedy', 'Horror'];
  const movies = await Promise.all(
    genres.map( async ( genre ) => {
      const movies = await getMoviesByGenre( genre, { _limit: 8 } )
      return { sectionTitle: genre, movies };
    } )
  );
    
  return (
    <div className='relative h-full bg-gradient-to-b lg:h-[140vh]'>
      <Header/>
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featureMovie} />
        {movies.map( ( movie ) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}
