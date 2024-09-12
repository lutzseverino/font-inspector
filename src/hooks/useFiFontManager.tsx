import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useFiFont from "@/hooks/useFiFont.tsx";
import useFiFontBuilder from "@/hooks/useFiFontBuilder.tsx";

const useFiFontManager = () => {
  const { t } = useTranslation(["app", "pages/start"]);
  const { loading, buildFiFont } = useFiFontBuilder();
  const fiFontContext = useFiFont();
  const navigate = useNavigate();

  const fileTypes = t("pages/start:file-types");
  const fileTypeArray = useMemo(() => fileTypes.split(", "), [fileTypes]);

  const { setLoading, setFiFont, setFile } = fiFontContext;

  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);

  const handleFiFontChange = useCallback(
    async (files: File[]) => {
      if (files.length > 0) {
        setFile(files[0]);
        setFiFont(await buildFiFont(files[0]));
        navigate("/font");
      }
    },
    [buildFiFont, navigate, setFiFont, setFile],
  );

  const handleFileTypeOutOfRange = useCallback(() => {
    toast.error(t("pages/start:file-type-out-of-range", { fileTypes }));
  }, [fileTypes, t]);

  return {
    handleFiFontChange,
    handleFileTypeOutOfRange,
    fileTypeArray,
    fiFontContext,
  };
};

export default useFiFontManager;
