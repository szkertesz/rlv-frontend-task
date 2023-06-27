import { Typography, Box } from '@mui/material'
import { ReactNode } from 'react'

interface IChartbox {
  title: string
  children?: ReactNode
}
const ChartBox = ({ title, children }: IChartbox) => {
  return (
    <Box
      component="article"
      sx={{
        p: 2,
        background: '#fff',
        borderRadius: 3,
        border: `1px solid rgba(0, 0, 0, 0.12)`,
      }}
    >
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default ChartBox
