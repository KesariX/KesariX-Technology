import { useEffect, useRef, useState } from "react";

export interface MagneticTarget {
  element: HTMLElement;
  bounds: DOMRect;
  id: string;
}

interface UseMagneticHoverReturn {
  magneticTarget: MagneticTarget | null;
  isHovering: boolean;
  targetBounds: DOMRect | null;
}

/**
 * useMagneticHover - Advanced hook for detecting and tracking magnetic hover targets
 *
 * Physics-based approach:
 * - Tracks all interactive elements in real-time
 * - Calculates bounding boxes for magnetic attraction
 * - Triggers cursor morphing when hovering
 * - Optimized for 60fps performance
 */
export function useMagneticHover(): UseMagneticHoverReturn {
  const [magneticTarget, setMagneticTarget] = useState<MagneticTarget | null>(
    null,
  );
  const [isHovering, setIsHovering] = useState(false);
  const [targetBounds, setTargetBounds] = useState<DOMRect | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const targetElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Selectors for magnetic-responsive elements
    const magneticSelectors = [
      "a",
      "button",
      '[data-magnetic="true"]',
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      ".kx-interactive",
    ];

    const handleMouseEnter = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const bounds = (e.target as HTMLElement).getBoundingClientRect();
        setTargetBounds(bounds);
        setIsHovering(true);
      });
    };

    const handleMouseLeave = () => {
      setMagneticTarget(null);
      setTargetBounds(null);
      setIsHovering(false);
      targetElementRef.current = null;
      if (observerRef.current) observerRef.current.disconnect();
    };

    // Attach listeners to all interactive elements
    const attachListeners = () => {
      const elements = document.querySelectorAll(magneticSelectors.join(", "));
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter as EventListener);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial attachment
    attachListeners();

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      attachListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      if (observerRef.current) observerRef.current.disconnect();

      const elements = document.querySelectorAll(magneticSelectors.join(", "));
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return { magneticTarget, isHovering, targetBounds };
}
