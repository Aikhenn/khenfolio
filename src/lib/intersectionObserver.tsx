import { useEffect, useRef, useState } from "react";

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.2 } // trigger earlier
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
