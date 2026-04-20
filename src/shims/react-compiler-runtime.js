// Stub for react/compiler-runtime — required by Sanity Studio's prebuilt bundles
// which expect React 19. We're on React 18, so we provide a no-op shim.
// The `c` hook is React Compiler's memo cache; returning a fresh array is a safe fallback.
export function c(size) {
  return new Array(size);
}
