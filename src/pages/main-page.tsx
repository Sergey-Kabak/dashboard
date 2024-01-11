import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

const MainPage = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

  const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

  return (
    <Box height="300px" width="100%">
      <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        series={[
          { data: pData, label: 'pv' },
          { data: uData, label: 'uv' },
        ]}
      />
    </Box>
  );
};

export default MainPage;
