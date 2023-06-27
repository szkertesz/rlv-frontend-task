import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  // ResponsiveContainer,
} from 'recharts'
import { data as populationData } from '../../assets/data'

const AgeHistogram = () => {
  const ageData = populationData.map(person => person.age)
  const range = 10
  const histogramData = []

  for (let i = 0; i < Math.ceil(Math.max(...ageData) / range); i++) {
    const rangeStart = i * range
    const rangeEnd = rangeStart + range
    const populationRangeByAge = populationData.filter(
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
    // <ResponsiveContainer>
    <BarChart width={600} height={400} data={histogramData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range">
        <Label value="Age" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis>
        <Label value="Count" offset={0} position="insideLeft" />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="male" stackId="a" fill="blue" />
      <Bar dataKey="female" stackId="a" fill="pink" />
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default AgeHistogram
