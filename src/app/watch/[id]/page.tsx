<<<<<<< HEAD
import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieById } from '@/app/service/MovieService';
import React from 'react';
=======
import React from "react";
import Header from "../../components/Header";
import { getMovieById } from "../../../service/MovieService";
import { Player } from "../../components/Player";
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a

interface IWatchProps {
  params: {
    id: string;
<<<<<<< HEAD
  };
}

export default async function Watch({ params }: IWatchProps) {
  const movie = await getMovieById(params.id);

  if (!movie) {
=======
  }
}

export default async function Watch( { params }: IWatchProps ) {
  const movie = await getMovieById( params.id );

  if ( !movie ) {
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }
<<<<<<< HEAD

  return <Player movie={movie} />;
}
=======
  return <Player movie={movie } />
  
}
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
