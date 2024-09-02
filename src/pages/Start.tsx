import Layout from "@/components/Layout/index.tsx";
import FileArea from "@/components/FileArea/index.tsx";
import {
  Heading3,
  InlineCode,
  Lead,
  Muted,
} from "@/components/Typography/index.tsx";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Spinner } from "@/components/Spinner/index.tsx";
import useFontContext from "@/hooks/useFontContext.tsx";
import { toast } from "sonner";

const Start = () => {
  const { t } = useTranslation(["app", "start"]);
  const { font, setFont } = useFontContext();

  const fileTypes = t("start:file-types");
  const dropToStart = t("start:drop-to-start", { fileTypes });

  const handleFileAreaChange = useCallback(
    (files: File[]) => {
      if (files.length > 0) setFont(files[0]);
    },
    [setFont],
  );

  const handleFileTypeOutOfRange = useCallback(() => {
    toast.error(t("start:file-type-out-of-range", { fileTypes }));
  }, [fileTypes, t]);

  return (
    <Layout fullscreen>
      <FileArea
        className="flex h-full items-center justify-center"
        fileTypes={fileTypes.split(", ")}
        onChange={handleFileAreaChange}
        onFileTypeOutOfRange={handleFileTypeOutOfRange}
      >
        <div className="m-4 flex h-full flex-col items-center justify-center">
          <div>
            <Heading3>{t("app:name")}</Heading3>
            <Lead>
              {dropToStart.split(fileTypes)[0]}
              <InlineCode>{fileTypes}</InlineCode>
              {dropToStart.split(fileTypes)[1]}
            </Lead>
            {font && (
              <div className="mt-6">
                <Muted>
                  <Spinner className="mr-2 inline" />
                  <span className="align-middle">
                    {`${t("start:evaluating")} ${font?.name}`}
                  </span>
                </Muted>
              </div>
            )}
          </div>
        </div>
      </FileArea>
    </Layout>
  );
};

export default Start;
