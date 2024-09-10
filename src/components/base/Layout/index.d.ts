import { NavbarProps } from "@/components/Navbar/index.d";

export interface LayoutProps {
  fullscreen?: boolean;
  hideNavbar?: boolean;
  disablePadding?: boolean;
  navbarProps?: NavbarProps;
  children?: React.ReactNode;
}
