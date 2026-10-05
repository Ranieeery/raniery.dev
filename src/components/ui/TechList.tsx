type TechListProps = {
  items: readonly string[];
  label: string;
  className?: string;
};

export function TechList({ items, label, className = "" }: TechListProps) {
  return (
    <ul
      aria-label={label}
      className={`slash-list flex flex-wrap font-mono text-xs leading-6 text-subtle ${className}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
