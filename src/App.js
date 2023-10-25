import "./App.css";
import "./index.css";
import "./index.css";
import Item from "./Components/Item";
import ItemDate from "./Components/ItemDate";
import Itemdate from "./Components/ItemDate";
import Products from "./Components/Products";
import NewProduct from "./Components/NewProduct";

function App() {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2023, 16, 21),
    },
    {
      id: "p2",
      title: "sirfExcel",
      amount: 200,
      date: new Date(2023, 10, 11),
    },
    {
      id: "p3",
      title: "wheel",
      amount: 300,
      date: new Date(2023, 1, 18),
    },
    {
      id: "p4",
      title: "power white",
      amount: 500,
      date: new Date(2023, 1, 18),
    },
  ];

  function printProductData(data) {
    console.log(data);
  }

  return (
    <>
      <div>
        {/* pranay={printProductData} << passint the function to the NewProduct component as props */}
        <NewProduct pranay={printProductData} />
        <Products items={products} />
      </div>
      {/* <Item name={response[0].itemName} />
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      />
      <Item name={response[1].itemName} />
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      />
      <Item name={response[2].itemName} />
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      />
      <div className="App">hello jee</div> */}
    </>
  );
}

export default App;
