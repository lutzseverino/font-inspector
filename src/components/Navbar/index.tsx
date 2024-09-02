import { NavbarProps } from "./index.d";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import LanguageCombo from "@/components/LanguageCombo/index.tsx";
import { Heading3 } from "@/components/Typography/index.tsx";
import { cn } from "@/lib/utils.ts";

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("app");

  return (
    <nav
      className={cn(
        className,
        "flex p-4 border-b border-neutral-200 justify-between",
      )}
    >
      <div>
        <Heading3>{t("app:name")}</Heading3>
      </div>
      <div></div>
      <div>
        <LanguageCombo />
      </div>
    </nav>
  );
};

export default Navbar;
