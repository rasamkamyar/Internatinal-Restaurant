import Link from "next/link";
import Style from "./index.module.css";

function Banner() {
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <h2>International Food</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          lorem ipsum dolor sit amet consectetur adlorem ipsum dolor sit amet
          consectetur ad
        </span>
        <Link href={"./menu"}>See All</Link>
      </div>
      <div className={Style.right}>
        <img src="images/banner.png" />
      </div>
    </div>
  );
}
export default Banner;
