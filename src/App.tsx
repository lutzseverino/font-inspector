import Start from "@/pages/Start.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FontProvider } from "@/contexts/FontContext";

const router = createBrowserRouter([
  {
    children: [{ path: "/", element: <Start /> }],
  },
]);

function App() {
  return (
    <FontProvider>
      <RouterProvider router={router} />
    </FontProvider>
  );
}

export default App;
