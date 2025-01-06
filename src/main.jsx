import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/nav-components/navbar/home/Home.jsx';
import About from './components/nav-components/navbar/about/About.jsx';
import Services from './components/nav-components/navbar/services/Services.jsx';
import Careers from './components/nav-components/navbar/careers/Careers.jsx';
import Contact from './components/nav-components/navbar/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About/>,
      },
      {
        path: "services",
        element: <Services/>,
      },
      {
        path: "careers",
        element: <Careers/>,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "*", // Catch-all route for undefined paths
        element: <h1>404 - Page Not Found</h1>,
      },
    
    ],
  },
]);

// Render the RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);