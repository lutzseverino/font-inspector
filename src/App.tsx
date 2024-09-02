import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { FontProvider } from "@/contexts/FontContext";
import Start from "@/pages/Start.tsx";

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
