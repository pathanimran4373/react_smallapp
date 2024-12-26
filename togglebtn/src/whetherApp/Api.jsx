
const apiKey = "98ccc3a51ec92bb5bcc1da5c2dd62392";

const Api = async(city) => {
  return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
  .then((response)=>response.json())
  .then((json)=>{
   return json
  })
}

export default Api