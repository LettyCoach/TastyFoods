import "./SearchAreasItem.css";

const SearchAreasItem = (props) => {

  let shortMeal = props.meal.strMeal
  shortMeal = shortMeal.slice(0,9)
  shortMeal = `${shortMeal}...`

  return (
      <article className="area-meal-item" value={props.meal.idMeal}>
          <div className="areaImageBox">
            <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
          </div>
          <p className="meal-name-area">{shortMeal}</p>
      </article>
  );
};

export default SearchAreasItem;