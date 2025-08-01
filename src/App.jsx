import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import AllProjects from "./Pages/AllProjects/AllProjects";
import { Bounce, ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound/NotFound";
import Loading from "./Components/Loading/Loading";
import CanvasCursor from "./Components/CanvasCursor/CanvasCursor";

// App Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <AllProjects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// Main App Component
function App() {
  // State to manage loading screen
  const [loading, setLoading] = useState(true);
  // Loading state to show a loading screen before the app is fully initialized
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CanvasCursor />
      {loading ? <Loading /> : <RouterProvider router={router} />}
      {/* Toaster */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
