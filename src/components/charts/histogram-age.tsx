import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  // ResponsiveContainer,
} from 'recharts'
import { red, blue } from '@mui/material/colors'
import { IChartProps } from './chart-props.interface'

const AgeHistogram = ({ chartdata }: IChartProps) => {
  const ageData = chartdata.map(person => person.age) as number[]
  const range = 10
  const histogramData = []

  for (let i = 0; i < Math.ceil(Math.max(...ageData) / range); i++) {
    const rangeStart = i * range
    const rangeEnd = rangeStart + range
    const populationRangeByAge = chartdata.filter(
      person => person.age >= rangeStart && person.age < rangeEnd
    )
    const maleCount = populationRangeByAge.filter(
      person => person.gender === 'male'
    ).length
    const femaleCount = populationRangeByAge.length - maleCount

    histogramData.push({
      range: `${rangeStart}-${rangeEnd}`,
      male: maleCount,
      female: femaleCount,
    })
  }

  return (
    <ResponsiveContainer width="100%" height={480}>
      <BarChart data={histogramData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range">
          <Label value="Age" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Count" offset={0} position="insideLeft" angle={-90} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="male" stackId="a" fill={blue[500]} />
        <Bar dataKey="female" stackId="a" fill={red[500]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default AgeHistogram
