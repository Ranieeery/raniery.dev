import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** Screen-reader hint appended to the accessible name. */
  newTabHint: string;
  children: ReactNode;
};

export function ExternalLink({
  newTabHint,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> {newTabHint}</span>
    </a>
  );
}
