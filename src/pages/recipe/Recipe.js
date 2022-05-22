import "./Recipe.css";
import {useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react/cjs/react.production.min";

export default function Recipe() {
    const { id } = useParams();
    const url = "http://localhost:3000/recipes/" + id;
    const { data: recipe, isPending, error } = useFetch(url);

    return (
        <div className="recipe">
          {isPending && <p className="error">Loading...</p>}
          {error && <p className="error">{error}</p>}
          {recipe && (
            <div>
              <h2>{recipe.title}</h2>
            </div>
          )}
        </div>
      );
}
