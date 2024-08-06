import { RefObject } from "react";

function Card({
  children,
  className = "",
  refo = null,
}: {
  children: React.ReactNode;
  className?: string;
  refo?: RefObject<HTMLDivElement> | null;
}) {
  return (
    <div
      ref={refo}
      className={
        className + " rounded-3xl bg-secondary p-10 shadow-md backdrop-blur-md"
      }
    >
      {children}
    </div>
  );
}

export default Card;
