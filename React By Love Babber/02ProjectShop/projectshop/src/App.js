import React from "react";
import "./App.css";
import Product from "./Components/Products";
import NewProduct from "./Components/NewProduct";

const App = () => {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Sirf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Maggi",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function printProductData(data) {
    console.log("i am inside APP.js");
    console.log(data);
  }

  return (
    <div className="App">
      <NewProduct createNewProduct={printProductData} />
      <Product items={products} />
      {/* <Product items={products} /> */}
    </div>
  );
};

export default App;

/* 

   <></> : fraagment apn kitne bhi html element use kr skte hn 
   yee prent ele ban jaye ga 

   kisi bhi compo 2 tpye se export kr skte hn hn 
   1. export default  component name;
   2. export {compo name };


*/
