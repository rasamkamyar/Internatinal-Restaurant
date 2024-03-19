import Location from "@/components/icons/Location";
import Style from "./index.module.css";
import Dollar from "@/components/icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { name, id, details, price } = props;
  return (
    <div className={Style.container}>
      <img src={`images/${id}.jpeg`} alt={name} />
      <div className={Style.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={Style.price}>
        <Dollar />
        <span>{price}</span>
      </div>
      <Link href={"/"}>See details</Link>
    </div>
  );
}

export default Card;
