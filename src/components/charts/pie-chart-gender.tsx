import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { red, blue } from '@mui/material/colors'
import { IChartProps } from './chart-props.interface'

const GenderPieChart = ({ chartdata }: IChartProps) => {
  const countMale = chartdata.filter(person => person.gender === 'male').length
  const countFemale = chartdata.length - countMale

  const pieData = [
    { name: 'Male', value: countMale },
    { name: 'Female', value: countFemale },
  ]

  const colors = [red[500], blue[500]]

  return (
    <ResponsiveContainer width="100%" height={340}>
      <PieChart width={240} height={340}>
        <Pie
          dataKey="value"
          data={pieData}
          cx={170}
          cy={150}
          outerRadius={120}
          fill="red"
          label
        >
          {pieData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default GenderPieChart
