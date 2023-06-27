import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { IResponseData } from '../../api/client.interface'
import { data } from '../../assets/data'

const ChildrenPieChart = () => {
  const populationData: IResponseData[] = data

  const countWithChildren = populationData.filter(
    person => person.children === 'yes'
  ).length
  const countWithoutChildren = populationData.length - countWithChildren

  const pieData = [
    { name: 'With Children', value: countWithChildren },
    { name: 'Without Children', value: countWithoutChildren },
  ]

  const colors = ['#8884d8', '#82ca9d']

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={pieData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend verticalAlign="bottom" align="center" />
    </PieChart>
  )
}

export default ChildrenPieChart
