import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  base: '/Madhav-Limbasiya-Portfolio/', // Add this line
  plugins: [react()],
})
