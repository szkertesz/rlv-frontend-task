import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { red, blue } from '@mui/material/colors'
import { IChartProps } from './chart-props.interface'

const EducationRatingScatterPlot = ({ chartdata }: IChartProps) => {
  const data = chartdata.map(person => ({
    rating: person.rating,
    education: person.education,
    gender: person.gender,
  }))

  const colors = {
    male: blue[400], // Color for males
    female: red[400], // Color for females
  }

  return (
    <ResponsiveContainer width="100%" height={480}>
      <ScatterChart
      // margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="education"
          name="Education"
          label={{
            value: 'Education indices',
            position: 'insideBottom',
            offset: 0,
          }}
        />
        <YAxis
          type="number"
          dataKey="rating"
          name="Rating"
          label={{
            value: 'Rating scores',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend height={40} verticalAlign="bottom" />
        {Object.keys(colors).map(gender => (
          <Scatter
            key={gender}
            name={gender}
            data={data.filter(person => person.gender === gender)}
            fill={colors[gender as keyof typeof colors]}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default EducationRatingScatterPlot
