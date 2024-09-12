import { useTranslation } from "react-i18next";

import Layout from "@/components/base/Layout/index.tsx";
import {
  Heading3,
  InlineCode,
  Lead,
  Muted,
} from "@/components/base/Typography/index.tsx";
import Dropzone from "@/components/ui/Dropzone/index.tsx";
import { Spinner } from "@/components/ui/Spinner";
import FiFontDropzone from "@/components/utils/FiFontDropzone";
import useFiFontManager from "@/hooks/useFiFontManager.tsx";

const Start = () => {
  const { t } = useTranslation(["app", "pages/start"]);
  const {
    handleFiFontChange,
    handleFileTypeOutOfRange,
    fileTypeArray,
    fiFontContext,
  } = useFiFontManager();

  const { loading, file } = fiFontContext;

  const fileTypes = t("pages/start:file-types");
  const dropToStart = t("pages/start:drop-to-start", { fileTypes });

  return (
    <FiFontDropzone>
      <Layout
        fullscreen
        disablePadding
        navbarProps={{
          hidden: true,
          hideTitle: true,
        }}
      >
        <div className="flex size-full flex-col items-center justify-center">
          <div>
            <Dropzone
              fileTypes={fileTypeArray}
              onChange={handleFiFontChange}
              onFileTypeOutOfRange={handleFileTypeOutOfRange}
            >
              <div className="p-8">
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
            </Dropzone>
          </div>
        </div>
      </Layout>
    </FiFontDropzone>
  );
};

export default Start;
