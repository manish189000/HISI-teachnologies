import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "jsx-in-js-files",
      transform(code, id) {
        if (id.endsWith(".js")) {
          return {
            code: code.replace(
              /(import\s+.*\s+from\s+['"](.*)['"];?)/g,
              (_, i, m) => {
                return i
                  .replace(".js", ".jsx")
                  .replace(m, m.replace(".js", ".jsx"));
              }
            ),
            map: null,
          };
        }
      },
    },
  ],
});
