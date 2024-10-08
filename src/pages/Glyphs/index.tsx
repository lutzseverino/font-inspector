import GlyphsPagination from "./Pagination";

import {
  ChangeEventHandler,
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import Layout from "@/components/base/Layout";
import Glyph from "@/components/ui/Glyph";
import { Input } from "@/components/ui/input.tsx";
import FiFontDropzone from "@/components/utils/FiFontDropzone/index.tsx";
import FiFontGuard from "@/components/utils/FiFontGuard";
import useFiFont from "@/hooks/useFiFont.tsx";

const Glyphs: FunctionComponent = () => {
  const { t } = useTranslation("pages/glyphs");
  const { fiFont } = useFiFont();

  const [filteredGlyphs, setFilteredGlyphs] = useState<ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const glyphsPerPage = 30;

  const glyphs: ReactElement[] = useMemo(
    () =>
      fiFont?.glyphs.map((glyph) => (
        <Glyph key={glyph.index} glyph={glyph} />
      )) || [],
    [fiFont],
  );

  useEffect(() => {
    setFilteredGlyphs(glyphs);
  }, [glyphs]);

  const displayedGlyphs = useMemo(() => {
    return filteredGlyphs.slice(
      (currentPage - 1) * glyphsPerPage,
      currentPage * glyphsPerPage,
    );
  }, [currentPage, filteredGlyphs, glyphsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredGlyphs.length / glyphsPerPage);
  }, [filteredGlyphs, glyphsPerPage]);

  const handleChangePage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setCurrentPage(1);
      const value = event.target.value.toLowerCase();
      const filtered = glyphs.filter((glyph) =>
        glyph.props.glyph.name.toLowerCase().includes(value),
      );

      setFilteredGlyphs(filtered);
    },
    [glyphs],
  );

  return (
    <FiFontDropzone>
      <FiFontGuard>
        <Layout fullscreen>
          <div className="flex h-full flex-col items-center">
            <div className="mb-4 w-full sm:w-96">
              <Input
                placeholder={t("search")}
                id="search"
                onChange={handleSearch}
              />
            </div>
            <div className="grid w-full grow grid-cols-2 grid-rows-5 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {displayedGlyphs}
            </div>
            {totalPages > 1 && (
              <div className="mt-6 pb-4">
                <GlyphsPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handleChangePage}
                />
              </div>
            )}
          </div>
        </Layout>
      </FiFontGuard>
    </FiFontDropzone>
  );
};

export default Glyphs;
