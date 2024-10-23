// import { gql } from '@apollo/client';
// import { apolloClient } from '../../lib/apolloClient';

// export const GET_MOVIES_QUERY = gql`
//   query GetMovies {
//     movies {
//       id
//       title
//       description
//       yearLaunched
//       link
//       castMembers
//       genres
//       thumbFileURL
//       bannerFileURL
//       videoFileURL
//       rating
//     }
//   }
// `;

// export const GET_MOVIE_BY_ID = gql`
//   query GetMovieById($id: ID!) {
//     movie(id: $id) {
//       id
//       title
//       description
//       yearLaunched
//       link
//       castMembers
//       genres
//       thumbFileURL
//       bannerFileURL
//       videoFileURL
//       rating
//     }
//   }
// `;

// export const GET_MOVIES_BY_GENRE = gql`
//   query GetMoviesByGenre($genre: String!) {
//     moviesByGenre(genre: $genre) {
//       id
//       title
//       description
//       yearLaunched
//       link
//       castMembers
//       genres
//       thumbFileURL
//       bannerFileURL
//       videoFileURL
//       rating
//     }
//   }
// `;

// export const gqlGetMoviesByGenre = async (
//   genre: string,
//   options: { _limit?: number } = {}
// ) => {
//   const _limit = options?._limit || 8;
//   const { data } = await apolloClient.query({
//     query: GET_MOVIES_BY_GENRE,
//     variables: { genre, _limit },
//   });

//   return data.moviesByGenre;
// };
