import Banner from "@/components/modules/Banner";
import Style from "./index.module.css";
import Attributes from "@/components/modules/Attributes";
import Definition from "@/components/modules/Defination";
import Companies from "@/components/modules/Companies";
import Instruction from "@/components/modules/Instruction";
import Guide from "@/components/modules/Guide";
import Restrictions from "@/components/modules/Restrictions";


function HomePage() {
  return (
    <div className={Style.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  )
}

export default HomePage;
