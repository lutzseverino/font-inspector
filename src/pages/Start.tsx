import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import Layout from "@/components/base/Layout";
import {
  Heading3,
  InlineCode,
  Lead,
  Muted,
} from "@/components/base/Typography";
import FileArea, { FileAreaSection } from "@/components/ui/FileArea";
import { Spinner } from "@/components/ui/Spinner";
import useFiFontBuilder from "@/hooks/useFiFontBuilder.tsx";
import useFont from "@/hooks/useFont.tsx";

const Start = () => {
  const { t } = useTranslation(["app", "pages/start"]);
  const { loading, buildFiFont } = useFiFontBuilder();
  const { setFont } = useFont();

  const [file, setFile] = useState<File>();

  const fileTypes = t("pages/start:file-types");
  const fileTypeArray = useMemo(() => fileTypes.split(", "), [fileTypes]);
  const dropToStart = t("pages/start:drop-to-start", { fileTypes });

  const handleFileAreaChange = useCallback(
    async (files: File[]) => {
      if (files.length > 0) {
        setFile(files[0]);
        setFont(await buildFiFont(files[0]));
      }
    },
    [buildFiFont, setFont],
  );

  const handleFileTypeOutOfRange = useCallback(() => {
    toast.error(t("pages/start:file-type-out-of-range", { fileTypes }));
  }, [fileTypes, t]);

  return (
    <Layout
      fullscreen
      disablePadding
      navbarProps={{
        hidden: true,
        hideTitle: true,
      }}
    >
      <FileArea
        className="flex h-full items-center justify-center"
        invisible
        fileTypes={fileTypeArray}
        onChange={handleFileAreaChange}
        onFileTypeOutOfRange={handleFileTypeOutOfRange}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <FileAreaSection>
            <div className="p-4">
              <Heading3>{t("app:name")}</Heading3>
              <Lead>
                {dropToStart.split(fileTypes)[0]}
                <InlineCode>{fileTypes}</InlineCode>
                {dropToStart.split(fileTypes)[1]}
              </Lead>
              {loading && (
                <div className="mt-6">
                  <Muted>
                    <Spinner className="mr-2 inline" />
                    <span className="align-middle">
                      {`${t("pages/start:evaluating")} ${file?.name}`}
                    </span>
                  </Muted>
                </div>
              )}
            </div>
          </FileAreaSection>
        </div>
      </FileArea>
    </Layout>
  );
};

export default Start;
