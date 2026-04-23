import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Forces every route navigation to start at the top of the page.
 * - Disables the browser's automatic scroll restoration so back/forward
 *   doesn't drop the user mid-page.
 * - Scrolls synchronously before paint (useLayoutEffect) to avoid the
 *   "flash at old scroll position" that made the header look broken.
 * - Preserves anchor link behavior — when a hash is present, do not override.
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  // Disable native scroll restoration once on mount.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;
    // Reset both window and documentElement to cover all browsers.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, key, navigationType]);

  return null;
};

export default ScrollToTop;
