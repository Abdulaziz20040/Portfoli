import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Rotlayout from "./Rotlayout";
import Home from "./pages/home";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rotlayout />,
      children: [
        {
          index: true, // Asosiy sahifa
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <MyProjects />,
        },
        {
          path: "skills",
          element: <MySkills />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
