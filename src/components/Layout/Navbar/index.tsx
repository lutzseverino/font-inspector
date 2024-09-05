import { NavbarProps } from "./index.d";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import LanguageCombo from "@/components/ui/Combobox/LanguageCombo/index.tsx";
import ThemeCombo from "@/components/ui/Combobox/ThemeCombo/index.tsx";
import { Heading3 } from "@/components/ui/Typography/index.tsx";
import { cn } from "@/lib/utils.ts";

const Navbar: FunctionComponent<NavbarProps> = ({
  className,
  hidden = false,
  hideTitle = false,
}) => {
  const { t } = useTranslation("app");

  return (
    <nav
      className={cn(
        className,
        `flex p-4 ${hidden ?? "border-b border-border"} justify-between items-center`,
      )}
    >
      <div>{!hideTitle && <Heading3>{t("name")}</Heading3>}</div>
      <div></div>
      <div className="flex flex-row">
        <div className="ml-4">
          <ThemeCombo />
        </div>
        <div className="ml-4">
          <LanguageCombo />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
