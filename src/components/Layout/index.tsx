import { LayoutProps } from "./index.d";
import { FunctionComponent } from "react";

const Layout: FunctionComponent<LayoutProps> = ({
  fullscreen = false,
  children,
}) => {
  return (
    <div className={`relative min-h-screen ${fullscreen ? "h-screen" : ""} `}>
      <div className="absolute bottom-0 left-0 right-0 top-0 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
