import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environmentMatchGlobs: [
            ['src/controllers/academy/http/**', 'prisma'],
            ['src/controllers/authenticate/http/**', 'prisma'],
            ['src/controllers/check-in/http/**', 'prisma'],
            ['src/controllers/profile/http/**', 'prisma'],
            ['src/controllers/users/http/**', 'prisma']
        ]
    }
}); 

// esse arquivo habilita o vitest entender importações feitas com o @