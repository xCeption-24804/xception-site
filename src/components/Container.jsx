export function Container({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-[var(--spacing-section-x)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
