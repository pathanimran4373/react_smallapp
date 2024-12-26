import { useState, useRef, useEffect } from "react";

const cityNames = [
  "Amsterdam", "Berlin", "London", "New York", "Paris", "Rome",
  "San Francisco", "Tokyo", "Washington DC", "Zurich", "Copenhagen",
  "Helsinki", "Madrid", "Reykjavik", "Stockholm", "Vancouver", "Vienna",
  "Zagreb", "Budapest", "Dublin", "Hamburg", "Krakow", "Lisbon", "Ljubljana"
];

const App = () => {
const [isValue, setValue] = useState("");
const [data] = useState(cityNames);

const filteredData = data.filter((list)=>list.toLowerCase().includes(isValue.toLowerCase())) 
const handleInput =(e)=>{
setValue(e.target.value)
setShow((toggle)=>!toggle)
}
  return (
    <>
     <input type="text" value={isValue} onChange={handleInput}/>
     <div>{filteredData.map((list)=>( <li>{list}</li>))}</div>
    </>
  );
};

export default App;
