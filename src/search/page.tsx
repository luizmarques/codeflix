

interface ISearchPrams {
  title?: string;
  genre?: string;
}

interface ISearchProps {
  searchParams: ISearchPrams
}

export default function SearchResults( { searchParams }: ISearchProps ) {
  const { title, genre} = searchParams;
  return (
    <div className="relative bg-gradient-to-b pb-8">
      <h1>Search Results</h1>
      <p>title: { title}</p>
      <p>genre: { genre}</p>

    </div>
  )
}