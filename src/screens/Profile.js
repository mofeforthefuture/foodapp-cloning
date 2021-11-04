import React from 'react';
import {View, FlatList} from 'react-native';
import {Card} from '../components';
import {COLORS, SIZES} from '../constants';
import {DATA} from '../constants/dummyData';
import {Calum, Pancake} from '../constants/images';

export default function Profile({navigation}) {
  return (
    <View
      style={{paddingHorizontal: SIZES.padding, backgroundColor: COLORS.white}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={DATA}
        renderItem={({item}) => (
          <Card
            name={item.name}
            avatar={item.avatar}
            image={item.image}
            product={item.product}
            onPress={() => navigation.navigate('recipe')}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
