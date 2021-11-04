import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, SIZES} from '../constants';

export default function Pills({text, color, textColor}) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: color,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 7,
        minWidth: 80,
      }}>
      <Text style={{fontWeight: '500', color: textColor, fontSize: 16}}>
        {text}
      </Text>
    </View>
  );
}
