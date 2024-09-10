import { LanguageComboProps, LanguageItem } from "./index.d";
import { Languages } from "lucide-react";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { Combobox } from "@/components/ui/Combobox";
import usePageTitle from "@/hooks/usePageTitle.tsx";

const LanguageCombo: FunctionComponent<LanguageComboProps> = () => {
  const { i18n, t } = useTranslation(["metadata", "app"]);
  const [title, setTitle] = useState(t("app:name"));

  usePageTitle(title);

  useEffect(() => {
    setTitle(t("app:name"));
  }, [setTitle, t, i18n.language]);

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
  const handleValueChange = useCallback(
    (value: string) => i18n.changeLanguage(value),
    [i18n],
  );

  return (
    <Combobox<LanguageItem>
      items={items}
      value={i18n.language}
      onValueChange={handleValueChange}
      getLabel={handleGetLabel}
      getDisplayLabel={handleGetDisplayLabel}
      getValue={handleGetValue}
      hideChevrons
      hideSearch={languages.length < 8}
      buttonProps={{
        size: "icon",
      }}
    />
  );
};

export default LanguageCombo;
