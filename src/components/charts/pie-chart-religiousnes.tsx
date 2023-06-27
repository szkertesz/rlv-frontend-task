import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { data as populationData } from '../../assets/data'

type TLevel = { [key: string]: number }

const ReligiousPieChart = () => {
  const religionData = populationData.map(person => person.religiousness)
  const pieData = []

  // count frequnecies of the different religiosness levels
  const levels = religionData.reduce((acc: TLevel, item) => {
    const key = String(item)
    if (acc[key] === undefined) {
      acc[key] = 0
    }
    acc[key]++
    return acc
  }, {})

  // transform data for the pie chart
  for (const level in levels) {
    pieData.push({
      level,
      freq: levels[level],
    })
  }

  const colors = [
    '#FEF001',
    '#FFCE03',
    '#FD9A01',
    '#FD6104',
    '#FF2C05',
    '#FF2C05',
  ]

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="freq"
        data={pieData}
        cx={200}
        cy={200}
        innerRadius={32}
        outerRadius={80}
        fill="#8884d8"
        nameKey="level"
      >
        {pieData.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend verticalAlign="bottom" align="center" />
    </PieChart>
  )
}

export default ReligiousPieChart
