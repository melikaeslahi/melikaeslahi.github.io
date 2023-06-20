import { lazy } from "react";

export const Home =  lazy(() => import("../pages/Home"));
export const About = lazy(() => import("../pages/About"));
export const Contact = lazy(() => import('../pages/Contact'))
export const Blogs = lazy(() => import("../pages/Blogs"))
export const Projects = lazy(() => import("../pages/Projects"))
export const Resume = lazy(() => import('../pages/Resume'))