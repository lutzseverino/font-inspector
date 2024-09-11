import { LayoutProps } from "./index.d";

import { FunctionComponent } from "react";

import Navbar from "@/components/base/Layout/Navbar";

const Layout: FunctionComponent<LayoutProps> = ({
  fullscreen = false,
  hideNavbar = false,
  disablePadding = false,
  navbarProps,
  children,
}) => {
  return (
    <div
      className={`flex min-h-svh flex-col ${fullscreen ? "h-svh" : "h-auto"} `}
    >
      {!hideNavbar && <Navbar {...navbarProps} />}
      <div className="relative grow">
        <div
          className={`absolute bottom-0 left-0 right-0 top-0 ${disablePadding ? "p-0" : "p-4"} `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
