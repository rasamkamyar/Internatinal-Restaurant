import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";
import Fast from "@/components/icons/Fast";
import Food from "@/components/icons/Food";
import Style from "./index.module.css";

function Attributes() {
  return (
    <div className={Style.container}>
      <h3>Why us?</h3>
      <div className={Style.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
