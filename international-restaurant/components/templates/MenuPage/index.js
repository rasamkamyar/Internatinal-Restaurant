import Card from "@/components/modules/Card";
import Style from "./index.module.css";

function MenuPage({ data }) {
  return (
    <div className={Style.container}>
      <h2>Menu</h2>
      <div className={Style.subContainer}>
        {data.map((food) => (
          <Card {...food} key={food.id} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
