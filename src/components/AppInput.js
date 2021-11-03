import React from 'react';

import {View, Text, TextInput} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

const AppInput = ({
  containerStyle,
  placeholder,
  value,
  inputStyle,
  prependComponent,
  appendComponent,
  onBlur,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  height,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: height,
          width: '100%',
          borderColor: COLORS.border,
          borderWidth: 1,
          paddingHorizontal: SIZES.padding / 2,
          alignItems: 'center',
          borderRadius: SIZES.radius,
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            color: COLORS.gray,
            ...inputStyle,
            ...FONTS.body4,
            height: '100%',
            width: '100%',
          }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          onBlur={onBlur}
          onChangeText={onChange}
          clearButtonMode={clearButtonMode}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default AppInput;
