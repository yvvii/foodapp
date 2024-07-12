import MealItem from "./MealsItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};
export function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("https://food-backend-hhof.onrender.com/meals", requestConfig, []);
  if (isLoading) {
    return <p className="center">Fetching meals.........</p>;
  }
  if (error) {
    return <Error title="failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
