import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom'; 
import GlobalStyles from './styles/globalStyles';
import { router } from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <GlobalStyles/>
  < ToastContainer/>
  </StrictMode>,
)


