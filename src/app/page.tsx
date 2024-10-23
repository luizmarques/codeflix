<<<<<<< HEAD
import React from 'react';
import { Suspense } from 'react';
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieService';
=======
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie, getMoviesByGenre } from '../service/MovieService';
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('106');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
<<<<<<< HEAD
    <Suspense>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
          <Banner movie={featuredMovie} />
          {movies.map((movie) => (
            <MovieRow
            movies={movie.movies}
              key={movie.sectionTitle}
              sectionTitle={movie.sectionTitle}
            />
          ))}
        </main>
      </div>
    </Suspense>
=======
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            movies={movie.movies}
            sectionTitle={movie.sectionTitle}
          />
        ))}
      </main>
    </div>
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
  );
}