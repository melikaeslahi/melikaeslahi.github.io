import { createBrowserRouter } from "react-router-dom";
import {Home , About , Resume , Contact , Projects , Blogs} from './lazy'
import ErrorPage from "../component/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Loading from '../component/Loading'
import { Suspense } from "react";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading /> }> <MainLayout /></Suspense>,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: '/',
        element:  <Suspense fallback={<Loading /> }> <Home helmet='  ملیکا اصلاحی|صفحه اصلی ' /> </Suspense> 
      },
      {
        path: '/aboute',
        element: <Suspense fallback={<Loading /> }>  <About helmet='ملیکا اصلاحی|درباره ی من ' /> </Suspense>  
      },
      {
        path: '/resume',
        element: <Suspense fallback={<Loading /> }> <Resume  helmet=' ملیکا اصلاحی|رزومه من ' /> </Suspense>   
      },
      {
        path: '/projects',
        element: <Suspense fallback={<Loading /> }> <Projects helmet={' ملیکا اصلاحی| پروژه ها '} /> </Suspense>    
      },
      {
        path: '/blogs',
        element: <Suspense fallback={<Loading /> }>  <Blogs helmet={'ملیکا اصلاحی|بلاگ ها '} /> </Suspense>  
      },
      {
        path: '/contact',
        element: <Suspense fallback={<Loading /> }>  <Contact  helmet={'ملیکا اصلاحی| ارتباط با من '} /> </Suspense>  
      },
    ]
  },
]);