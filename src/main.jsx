import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { router } from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import 'react-circular-progressbar/dist/styles.css';
 

 


 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider >
 
        <RouterProvider router={router} />
   
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
)
