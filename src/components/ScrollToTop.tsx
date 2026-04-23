import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on every pathname change.
 * Preserves anchor link behavior — when a hash is present, do not override.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
