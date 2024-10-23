<<<<<<< HEAD
import React from 'react';
import { searchMovies } from '../service/MovieService';
=======
import React, { Suspense } from 'react';
import { searchMovies } from '../../service/MovieService';
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
import Header from '../components/Header';
import { MovieCard } from '../components/MovieCard';

interface ISearchParams {
  title?: string;
  genre?: string;
}

interface ISearchProps {
  searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams }: ISearchProps) {
  const { title, genre } = searchParams;

  const movies = await searchMovies(title, genre);

  if (movies.length === 0) {
    return (
<<<<<<< HEAD
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Header />
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
            <h1 className='mb-4 text-2xl font-bold'>
              Search results for: <span className='text-red-500'>{title}</span>
            </h1>
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
=======
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for movie Title: <span className='text-red-500'>{title}</span>
          </h1>
          <p className='text-xl'>No movies found</p>
        </main>
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for: <span className='text-red-500'>{title}</span>
          </h1>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8'>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </main>
      </div>
=======
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
        <h1 className='mb-4 text-2xl font-bold'>
          Search results for movie title: <span className='text-red-500'>{title}</span>
        </h1>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8'>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </main>
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
    </div>
  );
}