import { useEffect, useLayoutEffect, useRef } from "react";

const breakpoints = {
  sm: "640",
  md: "768",
  lg: "1024",
  xl: "1280",
  "2xl": "1536",
} as const;


function calculateStyle(
  activePathname: string,
  listRef: React.RefObject<HTMLElement>,
) {
  const activeTab = listRef.current?.querySelector<React.ElementRef<"button">>(
    `button[data-tab^='${activePathname}']`,
  );

  if (!activeTab) return undefined;


  return {
    width: `${activeTab.clientWidth}px`,
    height: `${activeTab.clientHeight }px`,
    transform: `translateX(${activeTab.offsetLeft }px) translateY(${activeTab.offsetTop }px)`,
  };
}
const Highlight = ({ listRef, activeSection }: { listRef: React.RefObject<HTMLElement>, activeSection: string  }) => {
    const ref = useRef<React.ElementRef<"span">>(null);
    const activePathname = activeSection;
  
    function highlightActiveTab() {
      if (!ref.current) return;
  
      const style = calculateStyle(activePathname, listRef);
      if (!style) return;
  
      ref.current.style.width = style.width;
      ref.current.style.height = style.height;
      ref.current.style.transform = style.transform;
    }
  
    function reevaluateStyle() {
      ref.current?.classList.remove("transition-all");
      highlightActiveTab();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ref.current?.classList.add("transition-all");
        });
      });
    }
  
    // Highlight tab before initial render to suppress FOUC
    useLayoutEffect(() => {
      highlightActiveTab();
    }, []);
  
    useEffect(() => {
      highlightActiveTab();
    }, [activePathname]);
  
    // Add transition property after initial render.
    useEffect(() => {
      ref.current?.classList.add("transition-all");
      return () => ref.current?.classList.remove("transition-all");
    }, []);
  
    useEffect(() => {
      // match any default tailwind breakpoint
      const screenMediaQueries = Object.values(breakpoints).map((breakpoint) => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
        mediaQuery.addEventListener("change", reevaluateStyle);
        return mediaQuery;
      });
  
      return () => {
        screenMediaQueries.forEach((mediaQuery) =>
          mediaQuery.removeEventListener("change", reevaluateStyle),
        );
      };
    }, [activePathname]);
  
    return (
      <span ref={ref} className="absolute top-0 left-0 rounded-full bg-primary" />
    );
  };
  
  export { Highlight };