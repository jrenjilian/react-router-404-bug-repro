import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, Link, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "",
    element: <Link to="/bad-route">bad route</Link>,
    errorElement: <p>404</p>,
    loader: () => ({ data: "data" }),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
