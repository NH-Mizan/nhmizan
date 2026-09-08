"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (value) => 1 - Math.pow(1 - value, 3),
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
