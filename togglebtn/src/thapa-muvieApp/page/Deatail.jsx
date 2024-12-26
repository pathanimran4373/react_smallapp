import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Deatail = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('')

  const { id } = useParams()

  useEffect(() => {
    const apiDataFunction = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?apikey=eadbaa55&i=${id}`);
        const apiData = await response.json()
        console.log(apiData);
        setData(apiData)
        setLoading(false)

      } catch (error) {
        console.error(error)

        setLoading(false)

      }
    }
    apiDataFunction()

  }, [id])

  if (isLoading) {
    return (
      <h1>wait..............</h1>
    )
  }
  return (

    <div>
      <li>{data.Title }</li>
      <li>{data.Type }</li>
      <li>{data.Year }</li>
      <li>{data.Actors }</li>
    </div>
  )
}

export default Deatail