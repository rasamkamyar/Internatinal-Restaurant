import Link from "next/link";
import Style from "./index.module.css";

function Header() {
  return (
    <div className={Style.container}>
      <Link href={"/"} className={Style.title}>
        International Restaurant
      </Link>
      <navbar className={Style.navbar}>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/categories"}>Categories</Link>
      </navbar>
    </div>
  );
}

export default Header;
