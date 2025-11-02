import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/travel-map/",
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Remove comments from build
        comments: false,
        // Better asset naming
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' data:; img-src 'self' data: https: blob:; connect-src 'self' https:; font-src 'self' data:; object-src 'none'; media-src 'self'; frame-src 'none'; frame-ancestors 'none'; form-action 'self'; worker-src 'self' blob:;",
      "Permissions-Policy":
        "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
})
