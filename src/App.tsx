import { lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Toaster } from "@/components/ui/sonner.tsx";
import { useTheme } from "@/hooks/useTheme.tsx";
import { FiFontProvider } from "@/providers/FiFont";

const Glyphs = lazy(() => import("@/pages/Glyphs"));
const Start = lazy(() => import("@/pages/Start.tsx"));

const router = createBrowserRouter([
  {
    path: "/font",
    children: [
      { path: "", element: <Navigate to="/font/glyphs" replace /> },
      { path: "glyphs", element: <Glyphs /> },
    ],
  },
  { path: "/", element: <Start /> },
]);

function App() {
  const { theme } = useTheme();

  return (
    <FiFontProvider>
      <RouterProvider router={router} />
      <Toaster richColors theme={theme} />
    </FiFontProvider>
  );
}

export default App;
