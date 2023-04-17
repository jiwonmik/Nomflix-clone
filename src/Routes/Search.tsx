import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, _] = useSearchParams();
  console.log(searchParams.get('keyword'));
  return <h2>Search</h2>;
}
export default Search;
