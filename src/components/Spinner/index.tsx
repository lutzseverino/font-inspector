import { FunctionComponent } from "react";
import { LoaderCircle, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils.ts";

export const Spinner: FunctionComponent<LucideProps> = ({
  className,
  ...props
}) => {
  return <LoaderCircle className={cn("animate-spin", className)} {...props} />;
};
