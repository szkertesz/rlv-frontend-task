import { client, getData, getToken } from './api/client'
import { useEffect, useState } from 'react'

import { Typography } from '@mui/material'
import { Container, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { IResponseData } from './api/client.interface'
import ChildrenPieChart from './components/charts/pie-chart-children'
import GenderPieChart from './components/charts/pie-chart-gender'
import AgeHistogram from './components/charts/histogram-age'
import EducationRatingScatterPlot from './components/charts/scatter-plot-edu-rating'
import ReligiousPieChart from './components/charts/pie-chart-religiousnes'
import ChartBox from './components/ui/ChartBox'

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
      <Container>
        <Paper elevation={1} sx={{ padding: 2 }}>
          <Typography variant="h2" component="h1" mb={3}>
            Dashboard
          </Typography>
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <ChartBox title="Population and children">
                <ChildrenPieChart />
              </ChartBox>
            </Grid>
            <Grid xs={12} md={4}>
              <ChartBox title="Gender">
                <GenderPieChart />
              </ChartBox>
            </Grid>
            <Grid xs={12} md={4}>
              <ChartBox title="Level of religiousnes">
                <ReligiousPieChart />
              </ChartBox>
            </Grid>
            <Grid xs={12} md={6}>
              <ChartBox title="Age and gender">
                <AgeHistogram />
              </ChartBox>
            </Grid>
            <Grid xs={12} md={6}>
              <ChartBox title="Relationship between education and rating">
                <EducationRatingScatterPlot />
              </ChartBox>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default App
