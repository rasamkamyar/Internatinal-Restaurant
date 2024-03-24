import { useEffect, useState } from "react";
import Style from "./index.module.css";
import { useRouter } from "next/router";
import Card from "@/components/modules/Card";

function CategoriesPage({ data }) {
  const router = useRouter();

  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  function changeHandler(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  function searchHandler() {
    router.push({
      pathname: "/categories",
      query,
    });
  }

  return (
    <div className={Style.container}>
      <h2>Categories</h2>
      <div className={Style.subContainer}>
        <div className={Style.select}>
          <select
            name="difficulty"
            value={query.difficulty}
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select name="time" value={query.time} onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 mins</option>
            <option value="less">Less than 30 mins</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={Style.cards}>
          {!data.length ? <img src="./images/search.png" alt="category" /> : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
