import Banner from "@/components/modules/Banner";
import Style from "./index.module.css";
import Attributes from "@/components/modules/Attributes";


function HomePage() {
  return (
    <div className={Style.container}>
      <Banner />
      <Attributes />
    </div>
  );
}

export default HomePage;
