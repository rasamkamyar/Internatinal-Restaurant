import Style from "./index.module.css";

function CategoriesPage() {
  return (
    <div className={Style.container}>
      <h2>Categories</h2>
      <div className={Style.select}>
        <select>
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select>
          <option>Cooking Time</option>
          <option>More than 30 mins</option>
          <option>Less than 30 mins</option>
        </select>
      <button>Search</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
