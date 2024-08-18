import { Environment } from "vitest";

export default <Environment>{
    name: 'prisma',
    async setup() {
        console.log('Executou Setup');

        return {
            teardown() {
                console.log('Executou TearDown');
            }
        };
    },
    transformMode: "web"  // ou "ssr", dependendo do seu caso
};
