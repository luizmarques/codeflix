<<<<<<< HEAD
'use client';
import React, { FormEvent, ChangeEvent } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ISearchFormProps {
  searchTerm: string;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function SearchForm({
  searchTerm,
  onSearch,
  onSearchTermChange,
}: ISearchFormProps): JSX.Element {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
=======
'use client'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchForm = ( {
    searchTerm,
    onSearchTermChange,
    onSearch,
}: {
    searchTerm: string;
    onSearchTermChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
    onSearch: (event: React.FormEvent<HTMLFormElement> ) => void;

} ) => {
    return (
        <>
            <form onSubmit={onSearch}
                className="flex items-center space-x-2">
                <button type="submit">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                </button>
                <input
                    type='search'
                    id='search' 
                    name='search'
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={onSearchTermChange}
                    className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
            </form>
        </>
    )
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
}
