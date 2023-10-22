import "./App.css";
import Item from "./Components/Item";
import ItemDate from "./Components/ItemDate";
import Itemdate from "./Components/ItemDate";

function App() {
  const response = [
    {
      itemName: "nirma",
      itemDate: "23",
      itemMonth: "oct",
      itemYear: "2000",
    },
    {
      itemName: "surfExcel",
      itemDate: "21",
      itemMonth: "feb",
      itemYear: "1998",
    },
    {
      itemName: "wheel",
      itemDate: "12",
      itemMonth: "may",
      itemYear: "2019",
    },
  ];

  return (
    <>
      <Item name={response[0].itemName} />
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
      <div className="App">hello jee</div>
    </>
  );
}

export default App;
