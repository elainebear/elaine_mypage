import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/elaine_mypage",
    plugins: [plugin()],
    //server: {
    //    port: 60011,
    //}
})