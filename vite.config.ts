import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths]
});

// esse arquivo habilita o vitest entender importações feitas com o @