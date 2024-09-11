import GlyphsPagination from "./Pagination";
import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";

import Layout from "@/components/base/Layout";
import Glyph from "@/components/ui/Glyph";
import FontGuard from "@/components/utils/FontGuard/index.tsx";
import useFiFont from "@/hooks/useFiFont.tsx";

const Glyphs: FunctionComponent = () => {
  const { fiFont } = useFiFont();

  const glyphsPerPage = 36;
  const [currentPage, setCurrentPage] = useState(1);

  const glyphs: ReactElement[] = useMemo(
    () =>
      fiFont?.glyphs.map((glyph) => (
        <Glyph key={glyph.index} glyph={glyph} />
      )) || [],
    [fiFont],
  );

  const currentGlyphs = useMemo(() => {
    return glyphs.slice(
      (currentPage - 1) * glyphsPerPage,
      currentPage * glyphsPerPage,
    );
  }, [currentPage, glyphs, glyphsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(glyphs.length / glyphsPerPage);
  }, [glyphs, glyphsPerPage]);

  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <FontGuard>
      <Layout fullscreen>
        <div className="flex flex-col justify-between h-full">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {currentGlyphs}
          </div>
          {totalPages > 1 && (
            <div className="mt-6 pb-4">
              <GlyphsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </Layout>
    </FontGuard>
  );
};

export default Glyphs;
