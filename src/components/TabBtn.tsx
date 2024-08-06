import { MutableRefObject } from "react";

function TabBtn({
  refo,
  active,
  ...props
}: React.ComponentProps<"button"> & {
  active: boolean;
  refo: MutableRefObject<null> | null;
}) {
  return (
    <button
      {...props}
      ref={refo}
      className={
        active
          ? "h-4/5 rounded-3xl bg-primary px-4 py-2 text-xs text-accent transition-all md:text-sm lg:text-base"
          : "h-4/5 rounded-3xl px-4 py-2 text-xs transition-all duration-200 hover:bg-primary md:text-sm lg:text-base"
      }
    ></button>
  );
}

export default TabBtn;
