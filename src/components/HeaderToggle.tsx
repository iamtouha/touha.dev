import { createRef, type ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

export const HeaderToggle = ({ children }: { children: ComponentChildren }) => {
  const headerRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const pageNav = document.getElementById("pageNav");
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          headerRef.current?.classList.add("hide-header");
        } else {
          headerRef.current?.classList.remove("hide-header");
        }
      },
      { threshold: [0.6] },
    );
    if (pageNav) {
      observer.observe(pageNav);
    }
    return () => {
      if (pageNav) {
        observer.unobserve(pageNav);
      }
    };
  }, []);

  return (
    <div className="fixed w-full">
      <div
        ref={headerRef}
        className="max-w-screen-sm mx-auto p-3 sm:p-4 z-10 transition-[visibility,scale,opacity] hide-header"
      >
        {children}
      </div>
    </div>
  );
};
