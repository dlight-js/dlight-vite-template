import { defineConfig } from 'vite';
import dlight from "vite-plugin-dlight-transpiler";

export default defineConfig({
    server: {
        port: 26664
    },
    base: '',
    plugins: [
        dlight()
    ],
});