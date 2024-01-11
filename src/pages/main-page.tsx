import { Box, Container, Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { axisClasses, LineChart } from '@mui/x-charts';
import { ChartsTextStyle } from '@mui/x-charts/ChartsText';

const createData = (time, amount) => ({ time, amount: amount ?? null });

const MainPage = () => {
  const theme = useTheme();

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  return (
    <Box width="100%" height={'300px'}>
      <LineChart
        series={[
          { data: pData, label: 'pv' },
          { data: uData, label: 'uv' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />
    </Box>
  );
};

export default MainPage;
