/* eslint-disable @typescript-eslint/no-var-requires */

const reactI18next = require('react-i18next');

const useMock = {
  t: (k) => k,
  i18n: {},
};

module.exports = {
  useTranslation: () => useMock,
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
};
