import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag',  'localStorage','path', 'subdomain'],
      caches: ["cookie"] 
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }

  });

const loadingMarkup = (
  <div>
    <h2>Loading...</h2>
  </div>
)


ReactDOM.render(
  
  <React.StrictMode>
    <Suspense fallback={loadingMarkup}>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </Suspense>
    
  </React.StrictMode>,
  document.getElementById('root')
);