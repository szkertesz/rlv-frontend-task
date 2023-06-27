import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { data as populationData } from '../../assets/data'

const EducationRatingScatterPlot = () => {
  const data = populationData.map(person => ({
    rating: person.rating,
    education: person.education,
    gender: person.gender,
  }))

  const colors = {
    male: '#8884d8', // Color for males
    female: '#82ca9d', // Color for females
  }

  return (
    <ScatterChart
      width={500}
      height={300}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="education" name="Education" />
      <YAxis type="number" dataKey="rating" name="Rating" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      {Object.keys(colors).map(gender => (
        <Scatter
          key={gender}
          name={gender}
          data={data.filter(person => person.gender === gender)}
          fill={colors[gender as keyof typeof colors]}
        />
      ))}
    </ScatterChart>
  )
}

export default EducationRatingScatterPlot
