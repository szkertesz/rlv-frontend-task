import { client, getData, getToken } from './api/client'
import { useEffect, useState } from 'react'
import { IResponseData } from './api/client.interface'
import PieChartChildren from './components/charts/pie-chart-children'
import PieChartGender from './components/charts/pie-chart-gender'

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('jwt'))
  const [data, setData] = useState<IResponseData | null>(null)

  // effect for token management
  useEffect(() => {
    const manageToken = async () => {
      try {
        console.log('getting token')
        const response = await getToken()
        sessionStorage.setItem('jwt', response.token)
        setToken(response.token)
        client.defaults.headers.common['Token'] = response.token
      } catch (error) {
        // TODO: handle token related error cases
        console.error(error)
      }
    }
    if (token) {
      // TODO: should check token validity / expiration possibly using jwt-decode lib
      console.log('we got token')
      return
    }

    /* temporarily disable token management --
     we use already fetched mock data to
     create and test charts */
    // manageToken()
  }, [token])

  // effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData()
        console.log(response)
        setData(response)
      } catch (error) {
        // TODO: handle data fetching related error cases
        console.error(error)
      }
    }
    if (token) {
      fetchData()
    }
  }, [token])
  return (
    <>
      <h1>Dashboard</h1>
      <PieChartChildren />
      <PieChartGender />
    </>
  )
}

export default App
