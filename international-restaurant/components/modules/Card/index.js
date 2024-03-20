import Location from "@/components/icons/Location";
import Style from "./index.module.css";
import Dollar from "@/components/icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { name, id, details, price, discount } = props;
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
        {discount ? (
          <span className={Style.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={Style.badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`}>See details</Link>
    </div>
  );
}

export default Card;
