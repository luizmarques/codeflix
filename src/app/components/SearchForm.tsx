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
    )
}
