import 'react-native-gesture-handler';
import * as React from 'react';
import {LanguageContextAppProvider} from '../context/LanguageContext';

import {useSelector} from 'react-redux';
import BottomTab from './bottomTab.stack';

const Router = props => {
  const language = useSelector(state => state.lang.value.lang);
  console.log(language);
  return (
    <LanguageContextAppProvider selectedLang={language}>
      <BottomTab />
    </LanguageContextAppProvider>
  );
};
export default Router;
