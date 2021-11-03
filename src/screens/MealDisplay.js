import React from 'react';
import {View, Text, Image, TextInput, SafeAreaView} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import {SearchIcon} from '../constants/icons';
import {Pills} from '../components';
import TabBar from '../components/TabBar';

export default function MealDisplay() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLORS.white}}></SafeAreaView>

      <View
        style={{
          backgroundColor: '#fff',
          height: SIZES.height / 3.8,
          alignItems: 'center',
          marginBottom: SIZES.padding / 2,
        }}>
        <View
          style={{
            height: 56,
            borderRadius: 27,
            backgroundColor: '#F4F5F7',
            width: 327,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 27,
            marginTop: SIZES.padding,
          }}>
          <Image source={SearchIcon} />
          <TextInput
            placeholder="Search"
            style={{height: 56, paddingLeft: 15}}
          />
        </View>
        <View style={{width: 327}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 27,
              marginTop: 24,
              marginBottom: 16,
              color: COLORS.primaryTxt,
            }}>
            Category{' '}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Pills text={'All'} color={COLORS.green} textColor={COLORS.white} />
            <Pills
              text={'Food'}
              color={COLORS.background}
              textColor={COLORS.gray}
            />
            <Pills
              text={'Drink'}
              color={COLORS.background}
              textColor={COLORS.gray}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TabBar />
      </View>
    </View>
  );
}
