import GlyphAttribute from "./Attribute";
import GlyphBoundingBoxAttributes from "./BoundingBoxAttributes";
import GlyphGraphic from "./Graphic";
import { GlyphProps } from "./index.d";
import {
  FocusEvent,
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import {
  InlineCode,
  Muted,
  Paragraph,
  Small,
} from "@/components/base/Typography/index.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";

const Glyph: FunctionComponent<GlyphProps> = ({ glyph }) => {
  const { t } = useTranslation("components/glyph");

  const [open, setOpen] = useState(false);

  const path = useMemo(() => glyph.path.toSVG(2), [glyph.path]);
  const name = useMemo(() => glyph.name || t("unnamed"), [glyph.name, t]);
  const unicode = useMemo(
    () =>
      glyph.unicode?.toString(16).toUpperCase().padStart(4, "0") || t("n-a"),
    [glyph.unicode, t],
  );

  const handleDialogContentFocusCapture = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );

  const handleCopy = useCallback(
    async (type: string) => {
      switch (type) {
        case "unicode":
          await navigator.clipboard.writeText(
            String.fromCharCode(parseInt(unicode, 16)),
          );
          break;
        case "svg":
          await navigator.clipboard.writeText(path);
          break;
      }
      toast.success(t("copy.success"));
    },
    [path, t, unicode],
  );

  const handleCopyUnicode = useCallback(async () => {
    await handleCopy("unicode");
  }, [handleCopy]);

  const handleCopySVG = useCallback(async () => {
    await handleCopy("svg");
  }, [handleCopy]);

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="h-auto flex flex-col px-3"
            aria-label={t("accessibility.button-label", { name })}
          >
            <GlyphGraphic
              path={path}
              viewBoxWidth={glyph.advanceWidth ?? 0}
              viewBoxHeight={glyph.advanceWidth ?? 0}
              width={48}
              height={48}
            />
            <div className="flex flex-row w-full justify-between mt-4">
              <div className="overflow-hidden text-ellipsis">
                <Small>{name}</Small>
              </div>
              <div className="ml-2">
                <Muted>
                  <InlineCode>{unicode}</InlineCode>
                </Muted>
              </div>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent onFocusCapture={handleDialogContentFocusCapture}>
          <DialogDescription hidden>
            t("accessibility.dialog-description", {name})
          </DialogDescription>
          <DialogHeader>
            <DialogTitle className="flex justify-between">
              <div className="flex">
                <GlyphAttribute attribute={t("tooltips.index")}>
                  {glyph.index}
                </GlyphAttribute>
                <Separator className="mx-2" orientation="vertical" />
                <GlyphAttribute attribute={t("tooltips.name")}>
                  {name}
                </GlyphAttribute>
              </div>
              <div className="mr-5">
                <GlyphAttribute attribute={t("tooltips.unicode")}>
                  <InlineCode>{unicode}</InlineCode>
                </GlyphAttribute>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-row justify-between">
            <div>
              <div className="mb-2">
                <Muted>{t("titles.bounding-box")}</Muted>
                <GlyphBoundingBoxAttributes
                  xMin={glyph.xMin}
                  yMin={glyph.yMin}
                  xMax={glyph.xMax}
                  yMax={glyph.yMax}
                />
              </div>
              <div className="mb-2">
                <Muted>{t("titles.advance-width")}</Muted>
                <Paragraph disableMargin>
                  {glyph.advanceWidth ?? "N/A"}
                </Paragraph>
              </div>
              <div>
                <Muted>{t("titles.left-side-bearing")}</Muted>
                <Paragraph disableMargin>
                  {glyph.leftSideBearing ?? "N/A"}
                </Paragraph>
              </div>
            </div>
            <GlyphGraphic
              path={path}
              viewBoxWidth={glyph.advanceWidth ?? 0}
              viewBoxHeight={glyph.advanceWidth ?? 0}
              width={96}
              height={96}
            />
          </div>
          <DialogFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-full"
                  variant="outline"
                  aria-label={t("accesibility.copy-label", { name })}
                >
                  {t("copy.label")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleCopyUnicode}>
                  {t("copy.unicode")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopySVG}>
                  {t("copy.svg")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default Glyph;
