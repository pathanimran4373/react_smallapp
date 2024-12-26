import { useEffect, useState } from "react"

export default function App() {
  const [isInput, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const apiCall = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let getData = await res.json();
      console.log(getData)
      setData(getData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let delayFun = setTimeout(apiCall, 3000);
    return () => clearTimeout(delayFun);
  }, [isInput])



  const handleInput = (e) => {
    setInput(e.target.value);
    // setShow((toggle) => !toggle);
    setShow(true)
  }

  const filterData = data.filter((list) => (
      list.name.toLowerCase().includes(isInput.toLowerCase())
    ))
    const handleClick =(item)=>{
      setInput(item)
      setShow(false)
    }
  
  return (
    <>
      <input type="text" value={isInput} onChange={handleInput} />
      <div>{
        show && (
          filterData.map((list) => (<li key={list.id}>
            <p onClick={()=>handleClick(list.name)}>{list.name}</p>
            </li>))
        )
      }
      </div>
      {console.log(filterData)
      }
    </>
  )
}