import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { lightGreen, orange } from '@mui/material/colors'
import { IChartProps } from './chart-props.interface'

const ChildrenPieChart = ({ chartdata }: IChartProps) => {
  console.log(chartdata)
  const countWithChildren = chartdata.filter(
    person => person.children === 'yes'
  ).length
  const countWithoutChildren = chartdata.length - countWithChildren

  const pieData = [
    { name: 'Has Child', value: countWithChildren },
    { name: 'Has no Child', value: countWithoutChildren },
  ]

  const colors = [orange[500], lightGreen[500]]

  return (
    <ResponsiveContainer width="100%" height={340}>
      <PieChart width={240} height={340}>
        <Pie
          dataKey="value"
          data={pieData}
          cx={170}
          cy={150}
          outerRadius={120}
          fill="#8884d8"
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

export default ChildrenPieChart
