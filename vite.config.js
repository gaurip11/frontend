import { defineConfig } from 'vite'
//import validator from "validator"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
