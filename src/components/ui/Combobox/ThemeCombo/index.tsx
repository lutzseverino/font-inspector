import { ThemeComboProps, ThemeItem } from "./index.d";
import { SunMoon } from "lucide-react";
import { FunctionComponent, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Combobox } from "@/components/ui/Combobox";
import { useTheme } from "@/hooks/useTheme.tsx";
import { Theme } from "@/providers/Theme/index.d";

const ThemeCombo: FunctionComponent<ThemeComboProps> = () => {
  const { t } = useTranslation(["components/theme-combo"]);
  const { theme, setTheme } = useTheme();

  const items: ThemeItem[] = useMemo(
    () => [
      {
        label: t("light"),
        value: "light",
      },
      {
        label: t("dark"),
        value: "dark",
      },
      {
        label: t("system"),
        value: "system",
      },
    ],
    [t],
  );

  const handleGetLabel = useCallback((item: ThemeItem) => item.label, []);
  const handleGetDisplayLabel = useCallback(
    () => <SunMoon className="size-4" />,
    [],
  );
  const handleGetValue = useCallback((item: ThemeItem) => item.value, []);
  const handleValueChange = useCallback(
    (value: string) => setTheme(value as Theme),
    [setTheme],
  );

  return (
    <Combobox<ThemeItem>
      items={items}
      value={theme}
      onValueChange={handleValueChange}
      getLabel={handleGetLabel}
      getDisplayLabel={handleGetDisplayLabel}
      getValue={handleGetValue}
      hideChevrons
      hideSearch
      buttonProps={{
        size: "icon",
      }}
    />
  );
};

export default ThemeCombo;
