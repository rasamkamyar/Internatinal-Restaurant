import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Style from "./index.module.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={Style.container}>{children}</div>
      {/* <Footer />; */}
    </div>
  );
}

export default Layout;
