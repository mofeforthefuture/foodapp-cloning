import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  green: '#1FCC79',
  background: '#E5E5E5',
  white: '#FFFFFF',
  gray: '#9FA5C0',
  primaryTxt: '#3E5481',
  mainTxt: '#2E3E5C',
  secondaryTxt: '#9FA5C0',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 20,
  margin: 24,

  // font sizes
  h1: 32,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 26,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  big1: 100,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: {fontFamily: 'Poppins-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
  big1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.big1, lineHeight: 180},
  big2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.big1, lineHeight: 200},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
