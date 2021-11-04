import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Pancake3, Elena} from '../constants/images';
import {Indicator, Ellipse, Like, Check, ArrowBack} from '../constants/icons';
import {useTranslation} from '../context/LanguageContext';

const ListItem = ({text}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={Check} />
      <Text style={{...styles.primaryTxt, marginLeft: 10, fontWeight: '500'}}>
        {text}
      </Text>
    </View>
  );
};

export default function RecipeDisplay({navigation}) {
  const {
    recipe,
    ingredients,
    butter,
    eggs,
    likes,
    food,
    pancake,
    mins,
    description,
  } = useTranslation();
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{height: SIZES.height, width: SIZES.width}}>
        <ImageBackground
          source={Pancake3}
          style={{
            height: SIZES.height / 2,
            marginBottom: '-20%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              marginTop: 40,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={ArrowBack} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.container}>
          <Image source={Indicator} />
          <View style={{width: '100%'}}>
            <View style={{width: 150}}>
              <Text style={{...styles.primaryTxt, fontSize: 20}}>
                {pancake}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: SIZES.padding,
                }}>
                <Text style={{...styles.text}}>{food}</Text>
                <Image source={Ellipse} style={{marginHorizontal: 2}} />
                <Text style={styles.text}>60 {mins}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={Elena} style={{width: 40, height: 40}} />
              <Text style={{...styles.primaryTxt, marginLeft: 10}}>
                Elena Shelby
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.like}>
                <Image source={Like} style={{width: 18}} />
              </View>
              <Text style={styles.primaryTxt}>273 {likes}</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: COLORS.gray,
              marginBottom: 20,
            }}></View>

          <View style={{width: '100%'}}>
            <Text style={{...styles.primaryTxt, fontSize: 20}}>
              {description}
            </Text>

            <Text style={{color: COLORS.secondaryTxt, fontSize: 16}}>
              {recipe}
            </Text>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.gray,
                marginVertical: 20,
              }}></View>
            <View style={{marginBottom: SIZES.margin}}>
              <Text style={{...styles.primaryTxt, fontSize: 20}}>
                {ingredients}
              </Text>
              <View>
                <ListItem text={`4 ${eggs}`} />
                <ListItem text={`1/2 ${butter}`} />
                <ListItem text={`1/2 ${butter}`} />
                <ListItem text={`4 ${eggs}`} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: SIZES.width,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    paddingTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 14,
    color: COLORS.gray,
  },
  primaryTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.primaryTxt,
    marginBottom: SIZES.margin / 4,
  },
  like: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
