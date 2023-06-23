import { client, getToken } from './api/client'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState(localStorage.getItem('jwt'))

  // effect for token management
  useEffect(() => {
    const manageToken = async () => {
      console.log('manageToken runs')
      try {
        const response = await getToken()
        localStorage.setItem('jwt', response.token)
        setToken(response.token)
      } catch (error) {
        // TODO: handle token related error cases
        console.error(error)
      }
    }
    if (token) {
      client.defaults.headers.common['Token'] = token
      return
    }
    manageToken()
  }, [token])
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default App
