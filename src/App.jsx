import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import MySkills from "./pages/MySkills.jsx";
import Contact from "./pages/Contact.jsx";
import Rotlayout from "./pages/Rotlayout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rotlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
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
