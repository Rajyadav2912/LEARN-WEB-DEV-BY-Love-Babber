import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
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

  return (
    <div className="App">
      <Item ItemName="Nirma"></Item>
      <ItemDate date="20" month="january" year="2001"></ItemDate>
    </div>
  );
}

export default App;

/* function App() {
//   // How to access values approach - 1
  // return (
  //   <div className="App">
  //     Hello World
  //     <Item ItemName="Nirma"></Item>
  //     <ItemDate date="20" month="january" year="2001"></ItemDate>
  //   </div>
  // );

//   // How to access values approach - 2
//   const response = [
//     {
//       itemName: "Rajyadav1",
//       itemDate: "201",
//       itemMonth: "Jan",
//       itemyear: "1999",
//     },
//     {
//       itemName: "Nirma2",
//       itemDate: "202",
//       itemMonth: "Feb",
//       itemyear: "2000",
//     },
//     {
//       itemName: "Nirma3",
//       itemDate: "203",
//       itemMonth: "Mar",
//       itemyear: "2001",
//     },
//   ];

//   return (
//     <div>
//       <div className="App">
//         Hello World
//         <Item Name={response[0].itemName}></Item>
//         <ItemDate
//           date={response[0].itemDate}
//           month={response[0].itemMonth}
//           year={response[0].itemyear}
//         ></ItemDate>
//         <Item Name={response[1].itemName}></Item>
//         <ItemDate
//           date={response[1].itemDate}
//           month={response[1].itemMonth}
//           year={response[1].itemyear}
//         ></ItemDate>
//         <Item Name={response[2].itemName}></Item>
//         <ItemDate
//           date={response[2].itemDate}
//           month={response[2].itemMonth}
//           year={response[2].itemyear}
//         ></ItemDate>
//       </div>
//     </div>
//   );
// }

 export default App; */
