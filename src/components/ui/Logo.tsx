import { profile } from "@/content/profile";

type LogoProps = {
  /** `closing` renders `</Raniery>`, used in the footer. */
  variant?: "opening" | "closing";
  className?: string;
};

/** Text logo: the name wrapped in tag brackets. Brackets are decorative. */
export function Logo({ variant = "opening", className = "" }: LogoProps) {
  return (
    <span className={`font-mono text-sm font-medium ${className}`}>
      <span aria-hidden className="text-accent-text">
        {variant === "closing" ? "</" : "<"}
      </span>
      {profile.firstName}
      <span aria-hidden className="text-accent-text">
        {">"}
      </span>
    </span>
  );
}
