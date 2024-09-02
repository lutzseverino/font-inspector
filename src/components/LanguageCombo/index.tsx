import { LanguageComboProps, LanguageItem } from "./index.d";
import { FunctionComponent, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Combobox } from "@/components/Combobox/index.tsx";

const LanguageCombo: FunctionComponent<LanguageComboProps> = () => {
  const { i18n, t } = useTranslation(["metadata", "components/language-combo"]);

  const languages = ((i18n.options.supportedLngs || []) as string[]).filter(
    (l) => l !== "cimode",
  );

  const items: LanguageItem[] = languages.map((language) => ({
    label: t("metadata:display", { lng: language }),
    value: language,
  }));

  console.log("Items", items);

  const handleGetLabel = useCallback((item: LanguageItem) => item.label, []);
  const handleGetValue = useCallback((item: LanguageItem) => item.value, []);

  return (
    <Combobox<LanguageItem>
      className="w-32"
      items={items}
      value={i18n.language}
      placeholder={t("components/language-combo:placeholder")}
      notFound={t("components/language-combo:not-found")}
      onValueChange={i18n.changeLanguage}
      getLabel={handleGetLabel}
      getValue={handleGetValue}
    />
  );
};

export default LanguageCombo;
