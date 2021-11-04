import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, SIZES} from '../constants';

export default function Pills({text, color, textColor}) {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: color,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 10,
        minWidth: 80,
      }}>
      <Text style={{fontWeight: '500', color: textColor, fontSize: SIZES.h2}}>
        {text}
      </Text>
    </View>
  );
}
