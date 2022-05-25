import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipesList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search; // .search is a property from react-router-dom. It's the query string part after the ?.
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("query");

  const url = `http://localhost:3000/recipes?q=${query}`; // q is a json-server (npm) specific keyword, for searchiing terms.
  const { error, isPending, data: recipes } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipesList recipes={recipes} />}
    </div>
  );
}
