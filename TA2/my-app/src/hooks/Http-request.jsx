import { useEffect, useState } from 'react'

export const useHttpRequest = url => {
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async url => {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
        setErr(false)
      } catch (err) {
        setErr(true)
        console.log(err)
      }
    }
    fetchData(url); 
  }, [url])
  return [loading, err, data ]
}
