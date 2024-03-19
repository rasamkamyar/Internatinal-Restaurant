import Apple from "@/components/icons/Apple";
import Style from "./index.module.css";
import SpaceX from "@/components/icons/SpaceX";
import Binance from "@/components/icons/Binance";
import Tesla from "@/components/icons/Tesla";

function Companies() {
  return (
    <div className={Style.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}
export default Companies;
