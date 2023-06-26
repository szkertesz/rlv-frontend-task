import { PieChart, Pie, Cell, Legend } from 'recharts'
import { IResponseData } from '../../api/client.interface'
import { data } from '../../assets/data'

const PieChartGender = () => {
  const populationData: IResponseData[] = data

  const countMale = populationData.filter(
    person => person.gender === 'male'
  ).length
  const countFemale = populationData.length - countMale

  const pieData = [
    { name: 'Male', value: countMale },
    { name: 'Female', value: countFemale },
  ]

  const colors = ['red', 'blue']

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={pieData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="red"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" align="center" />
    </PieChart>
  )
}

export default PieChartGender
