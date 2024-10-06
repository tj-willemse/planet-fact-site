import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Your main HTML file
        venus: 'pages/venus.html', // Path to Venus page
        earth: 'pages/earth.html', // Path to Earth page
        mars: 'pages/mars.html', // Path to Mars page
        jupiter: 'pages/jupiter.html',
        neptune: 'pages/neptune.html',
        saturn: 'pages/saturn.html',
        uranus: 'pages/uranus.html',
      },
    },
  },
});
