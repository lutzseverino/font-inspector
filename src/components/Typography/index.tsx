import { TypographyProps } from "./index.d";
import { FunctionComponent } from "react";

import { cn } from "@/lib/utils.ts";

const Heading1: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <h1
      className={cn(
        `scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </h1>
  );
};

const Heading2: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <h2
      className={cn(
        `scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </h2>
  );
};

const Heading3: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <h3
      className={cn(
        `scroll-m-20 text-2xl font-semibold tracking-tight ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </h3>
  );
};

const Heading4: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <h4
      className={cn(
        `scroll-m-20 text-xl font-semibold tracking-tight ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </h4>
  );
};

const Paragraph: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <p
      className={cn(
        `leading-7 [&:not(:first-child)]:mt-6 ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </p>
  );
};

const Blockquote: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <blockquote
      className={cn(
        `mt-6 border-l-2 pl-6 italic ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </blockquote>
  );
};

const InlineCode: FunctionComponent<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <code
      className={cn(
        "relative inline rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
};

const Lead: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <p
      className={cn(
        `text-xl text-muted-foreground ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </p>
  );
};

const Large: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <div
      className={cn(
        `text-lg font-semibold ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const Small: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <small
      className={cn(
        `text-sm font-medium leading-none ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </small>
  );
};

const Muted: FunctionComponent<TypographyProps> = ({
  children,
  inline,
  className,
}) => {
  return (
    <p
      className={cn(
        `text-sm text-muted-foreground ${inline ? "inline" : ""}`,
        className,
      )}
    >
      {children}
    </p>
  );
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Blockquote,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
};
