const cols = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
};

const gaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

export function Grid({
  cols: colKey = 3,
  gap = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <div className={`grid ${cols[colKey] ?? cols[3]} ${gaps[gap] ?? gaps.md} ${className}`} {...props}>
      {children}
    </div>
  );
}
