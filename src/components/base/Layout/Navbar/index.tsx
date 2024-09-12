import { NavbarProps } from "./index.d";

import { FunctionComponent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Heading3 } from "@/components/base/Typography";
import LanguageCombo from "@/components/ui/Combobox/LanguageCombo";
import ThemeCombo from "@/components/ui/Combobox/ThemeCombo";
import { cn } from "@/lib/utils.ts";

const Navbar: FunctionComponent<NavbarProps> = ({
  className,
  hidden = false,
  hideTitle = false,
}) => {
  const { t } = useTranslation("app");
  const navigate = useNavigate();

  const handleClickTitle = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <nav
      className={cn(
        className,
        `flex p-4 ${hidden ? "" : "border-b border-border"} items-center justify-between`,
      )}
    >
      <div className="cursor-pointer" onClick={handleClickTitle}>
        {!hideTitle && <Heading3>{t("name")}</Heading3>}
      </div>
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
