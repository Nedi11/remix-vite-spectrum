import {unstable_vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    ssr: {
        noExternal: [
            /^@adobe\/react-spectrum/,
            /^@react-spectrum/,
            /^@spectrum-icons/,
        ],
    },
    plugins: [remix(), tsconfigPaths()],
});
