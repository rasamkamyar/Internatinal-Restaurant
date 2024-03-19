import Link from "next/link";
import Style from "./index.module.css";

function Guide() {
  return (
    <div className={Style.container}>
      <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  );
}

export default Guide;
