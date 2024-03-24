import { useState } from "react";
import Style from "./index.module.css";
import { useRouter } from "next/router";

function CategoriesPage() {
  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });

  function changeHandler(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  return (
    <div className={Style.container}>
      <h2>Categories</h2>
      <div className={Style.select}>
        <select name="difficulty" onChange={changeHandler}>
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select name="time" onChange={changeHandler}>
          <option value="">Cooking Time</option>
          <option value="more">More than 30 mins</option>
          <option value="less">Less than 30 mins</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
