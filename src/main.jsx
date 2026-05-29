import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru',"hy","eng","rus"],
        fallbackLng: 'en',
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        }
    })


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </StrictMode>,
)
