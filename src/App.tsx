import { RouterProvider } from 'react-router-dom';

import { MuiThemeProvider } from '@/providers/theme-provider';

import { router } from './router/index';

const App = () => (
  <MuiThemeProvider>
    <RouterProvider router={router} />
  </MuiThemeProvider>
);

export default App;
