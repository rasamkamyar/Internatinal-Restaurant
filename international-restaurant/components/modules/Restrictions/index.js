import Style from "./index.module.css";

function Restrictions() {
  return (
    <div className={Style.container}>
      <h3>Restrictions</h3>
      <p>
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Uber. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </p>
    </div>
  );
}

export default Restrictions;
