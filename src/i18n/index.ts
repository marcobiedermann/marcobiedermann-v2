import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import about from '../locales/en/about.json';
import common from '../locales/en/common.json';
import project from '../locales/en/project.json';

i18n.use(initReactI18next).init({
  defaultNS: 'common',
  debug: true,
  fallbackLng: 'en',
  lng: 'en',
  ns: ['about', 'common', 'project'],
  resources: {
    en: {
      about,
      common,
      project,
    },
  },
});

export default i18n;
