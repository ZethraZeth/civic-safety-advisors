import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg bg-white p-6 shadow-lg",
        hover && "transition-shadow hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
