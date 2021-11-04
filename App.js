import React from 'react';
import Router from './src/navigation/route.stack';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import langReducer from './src/reducers/lang.reducer';

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default function App() {
  // const language = useSelector(state => state.lang.value);
  // console.log(language);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
