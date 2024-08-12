import React from "react";
const RemoteApp = React.lazy(() => import("Remote/Home"));

const addToCart = (item) => () => {
  const event = new CustomEvent("addList", { detail: item });
  window.dispatchEvent(event);
};
const productItemView = (product, index) => {
  const price = parseFloat((Math.random() * 100).toFixed(2));
  return (
    <li
      key={index}
      style={{
        padding: "30px",
        listStyle: "none",
        border: "1px solid #000",
        margin: "5px",
      }}
    >
      <b>{product}</b> <br />$ {price} <br />
      <button onClick={addToCart({ product, price })}>Buy</button>
    </li>
  );
};
// SAMPLE POC TO TEST STATE SHARING BETWEEN 2 MFE's
const Home = () => {
  return (
    <div>
      <section>
        <h1>
          POC - Sharing State using Custom Event and window Event Listeners
        </h1>
        <ul style={{ display: "flex", padding: "5" }}>
          {["T-Shirt", "Jeans", "Shorts", "Joggers"].map(productItemView)}
        </ul>
      </section>
      <h2> Below is from remote MFE</h2>
      <React.Suspense fallback="Loading Remote MFE">
        <RemoteApp />
      </React.Suspense>
    </div>
  );
};
export default Home;
