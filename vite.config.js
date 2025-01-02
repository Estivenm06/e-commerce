const react = require('@vitejs/plugin-react')
const {defineConfig} = require('vite')

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [react()],
})
