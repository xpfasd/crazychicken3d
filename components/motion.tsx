"use client";

import React from "react";

type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileInView?: Record<string, any>;
  viewport?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

export const motion = {
  div: ({ children, initial, animate, exit, transition, whileInView, viewport, ...rest }: MotionProps) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!whileInView || !ref.current) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
            }
          });
        },
        { threshold: viewport?.margin ? 0 : 0.1, rootMargin: viewport?.margin || "0px" }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [viewport, whileInView, hasAnimated]);

    const getAnimationStyle = () => {
      if (whileInView && hasAnimated) {
        return {
          ...whileInView,
          transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease'} ${transition?.delay || 0}s`,
        };
      }
      
      if (!hasAnimated && initial) {
        return initial;
      }
      
      return {};
    };

    const style = {
      ...rest.style,
      ...getAnimationStyle(),
    };

    return (
      <div ref={ref} {...rest} style={style}>
        {children}
      </div>
    );
  },
};

function useState<T>(initialState: T): [T, (newState: T) => void] {
  const [state, setState] = React.useState<T>(initialState);
  return [state, setState];
}

function useRef<T>(initialValue: T | null): React.RefObject<T> {
  return React.useRef<T>(initialValue);
}

function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void {
  React.useEffect(effect, deps);
}