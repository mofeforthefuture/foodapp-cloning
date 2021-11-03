import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '../components';
import {SIZES} from '../constants';
import {Calum, Pancake} from '../constants/images';

export default function Profile({navigation}) {
  return (
    <View style={{paddingHorizontal: SIZES.padding}}>
      <Card
        avatar={Calum}
        image={Pancake}
        onPress={() => navigation.navigate('recipe')}
      />
    </View>
  );
}
