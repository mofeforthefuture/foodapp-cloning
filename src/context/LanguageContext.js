import React, {Children, createContext, useContext} from 'react';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import ib from '../lang/ib.json';
import yb from '../lang/yb.json';

const LanguageContext = createContext();

const laguageObj = {
  en: en,
  fr: fr,
  ib: ib,
  yb: yb,
};

export const LanguageContextAppProvider = ({children, selectedLang}) => {
  const value = {...laguageObj[selectedLang]};
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
