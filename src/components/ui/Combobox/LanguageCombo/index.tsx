import { LanguageComboProps, LanguageItem } from "./index.d";
import { Languages } from "lucide-react";
import { FunctionComponent, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Combobox } from "@/components/ui/Combobox/index.tsx";

const LanguageCombo: FunctionComponent<LanguageComboProps> = () => {
  const { i18n, t } = useTranslation("metadata");

  const languages = useMemo(
    () =>
      ((i18n.options.supportedLngs || []) as string[]).filter(
        (l) => l !== "cimode",
      ),
    [i18n.options.supportedLngs],
  );

  const items: LanguageItem[] = useMemo(
    () =>
      languages.map((language) => ({
        label: t("metadata:display", { lng: language }),
        value: language,
      })),
    [languages, t],
  );

  const handleGetLabel = useCallback((item: LanguageItem) => item.label, []);
  const handleGetDisplayLabel = useCallback(
    () => <Languages className="size-4" />,
    [],
  );
  const handleGetValue = useCallback((item: LanguageItem) => item.value, []);

  return (
    <Combobox<LanguageItem>
      items={items}
      value={i18n.language}
      onValueChange={i18n.changeLanguage}
      getLabel={handleGetLabel}
      getDisplayLabel={handleGetDisplayLabel}
      getValue={handleGetValue}
      hideChevrons
      buttonProps={{
        size: "icon",
      }}
    />
  );
};

export default LanguageCombo;
