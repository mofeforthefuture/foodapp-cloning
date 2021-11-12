import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import {SearchIcon} from '../constants/icons';
import {Pills} from '../components';
import TabBar from '../components/TabBar';
import {useTranslation} from '../context/LanguageContext';

export default function MealDisplay() {
  const {category, search, all, drinks, food} = useTranslation();
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: COLORS.white}}></SafeAreaView>

      <View style={styles.topContainer}>
        <View style={styles.search}>
          <Image source={SearchIcon} />
          <TextInput
            placeholder={search}
            placeholderTextColor={COLORS.placeholder}
            style={styles.input}
          />
        </View>
        <View style={{width: SIZES.width, alignItems: 'center'}}>
          <View style={{width: 327}}>
            <Text style={styles.bold}>{category} </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft: 10}}>
              <Pills text={all} color={COLORS.green} textColor={COLORS.white} />
              <Pills
                text={food}
                color={COLORS.background}
                textColor={COLORS.gray}
              />
              <Pills
                text={drinks}
                color={COLORS.background}
                textColor={COLORS.gray}
              />
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TabBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#fff',
    height: SIZES.height / 3.2,
    alignItems: 'center',
    marginBottom: SIZES.padding / 2.5,
  },
  search: {
    height: 56,
    borderRadius: 27,
    backgroundColor: '#F4F5F7',
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 27,
    marginTop: SIZES.padding,
  },
  input: {
    height: 56,
    width: 300,
    paddingLeft: 15,
    color: COLORS.placeholder,
  },
  bold: {
    fontWeight: '700',
    fontSize: 27,
    marginTop: 24,
    marginBottom: 16,
    color: COLORS.primaryTxt,
  },
});
