import { client, getData, getToken } from './api/client'
import { useEffect, useState } from 'react'

import { Typography, Container, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { IResponseData } from './api/client.interface'

import ChildrenPieChart from './components/charts/pie-chart-children'
import GenderPieChart from './components/charts/pie-chart-gender'
import AgeHistogram from './components/charts/histogram-age'
import EducationRatingScatterPlot from './components/charts/scatter-plot-edu-rating'
import ReligiousPieChart from './components/charts/pie-chart-religiousnes'
import ChartBox from './components/ui/ChartBox'
import Header from './components/ui/Header'
import Sidebar from './components/ui/Sidebar'

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('jwt'))
  const [data, setData] = useState<IResponseData[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // effect for token management
  useEffect(() => {
    const manageToken = async () => {
      setIsError(false)
      try {
        console.log('getting token')
        const response = await getToken()
        setToken(response.token)
        client.defaults.headers.common['Token'] = response.token
        sessionStorage.setItem('jwt', response.token)
      } catch (error) {
        setIsError(false)
        console.error(error)
        sessionStorage.removeItem('jwt')
      }
    }
    if (token) {
      // TODO: should check token validity / expiration possibly using jwt-decode lib
      console.log('we got token')
      return
    }
    manageToken()
  }, [token])

  // effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await getData()
        setData(response)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
    if (token) {
      fetchData()
    }
  }, [token])
  return (
    <>
      <Header />
      <Sidebar />
      <Container sx={{ pt: 12 }}>
        <Paper elevation={0} sx={{ padding: 2 }}>
          <Typography variant="h2" component="h1" mb={3}>
            Dashboard
          </Typography>
          {isError && (
            <p>
              Something went wrong ...
              <br />
              Check the console for details
            </p>
          )}

          {isLoading && <div>Loading ...</div>}

          {!isLoading && data && (
            <Grid container spacing={4}>
              <Grid xs={12} md={4}>
                <ChartBox title="Population and children">
                  <ChildrenPieChart chartdata={data} />
                </ChartBox>
              </Grid>
              <Grid xs={12} md={4}>
                <ChartBox title="Gender">
                  <GenderPieChart chartdata={data} />
                </ChartBox>
              </Grid>
              <Grid xs={12} md={4}>
                <ChartBox title="Level of religiousnes">
                  <ReligiousPieChart chartdata={data} />
                </ChartBox>
              </Grid>
              <Grid xs={12} md={6}>
                <ChartBox title="Age and gender">
                  <AgeHistogram chartdata={data} />
                </ChartBox>
              </Grid>
              <Grid xs={12} md={6}>
                <ChartBox title="Relationship between education and rating">
                  <EducationRatingScatterPlot chartdata={data} />
                </ChartBox>
              </Grid>
            </Grid>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default App
