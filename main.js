{
  "name": "lavanya-oms",
  "version": "5.0.0",
  "description": "Lavanya Aari Materials \u2013 Order Management System v4",
  "main": "main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "start": "concurrently \"npm run dev\" \"wait-on http://localhost:5173 && electron .\"",
    "dist": "npm run build && electron-builder"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "pdfjs-dist": "3.11.174",
    "tesseract.js": "^5.1.0",
    "xlsx": "^0.18.5",
    "@supabase/supabase-js": "^2.45.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "concurrently": "^8.2.0",
    "electron": "^25.0.0",
    "electron-builder": "^24.4.0",
    "vite": "^4.4.0",
    "vite-plugin-pwa": "^0.20.0",
    "wait-on": "^7.0.1"
  },
  "build": {
    "appId": "com.lavanya.oms",
    "productName": "Lavanya OMS",
    "files": [
      "dist/**/*",
      "main.js",
      "preload.js"
    ],
    "directories": {
      "output": "release"
    }
  }
}