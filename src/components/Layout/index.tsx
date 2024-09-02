import { LayoutProps } from "./index.d";
import { FunctionComponent } from "react";

import Navbar from "@/components/Navbar/index.tsx";

const Layout: FunctionComponent<LayoutProps> = ({
  fullscreen = false,
  hideNavbar = false,
  disablePadding = false,
  children,
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${fullscreen && "h-screen"} `}>
      {!hideNavbar && <Navbar />}
      <div className="grow relative">
        <div
          className={`absolute bottom-0 left-0 right-0 top-0 ${!disablePadding && "p-4"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
