import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner.tsx";
import { useTheme } from "@/hooks/useTheme.tsx";
import Start from "@/pages/Start.tsx";
import { FontProvider } from "@/providers/FontProvider";

const router = createBrowserRouter([
  {
    children: [{ path: "/", element: <Start /> }],
  },
]);

function App() {
  const { theme } = useTheme();

  return (
    <FontProvider>
      <RouterProvider router={router} />
      <Toaster richColors theme={theme} />
    </FontProvider>
  );
}

export default App;
