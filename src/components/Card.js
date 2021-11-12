import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Love, Ellipse} from '../constants/icons';
import {useTranslation} from '../context/LanguageContext';

export default function Card({avatar, image, onPress, name, product}) {
  const {food, mins} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          paddingRight: SIZES.padding * 1.4,
        }}>
        <View style={{...styles.avatar}}>
          <Image source={avatar} />
        </View>
        <Text
          style={{
            fontSize: SIZES.h4,
            fontWeight: '500',
            color: COLORS.mainTxt,
          }}>
          {name}
        </Text>
      </View>

      <ImageBackground
        source={image}
        resizeMode="contain"
        style={styles.background}>
        <TouchableOpacity style={styles.like}>
          <Image source={Love} resizeMode="contain" style={{width: 25}} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{width: '100%'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 20,
            color: COLORS.primaryTxt,
            marginBottom: SIZES.margin / 4,
          }}>
          {product}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: SIZES.padding,
          }}>
          <Text style={styles.text}>{food}</Text>
          <Image source={Ellipse} />
          <Text style={styles.text}>
            {'>'}60 {mins}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 320,
    alignItems: 'center',
    marginTop: SIZES.margin,
    marginHorizontal: 10,
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
  background: {
    width: '100%',
    height: '80%',
    alignItems: 'flex-end',
    marginBottom: '-40%',
    borderRadius: 20,
  },
  like: {
    width: 40,
    height: 40,
    borderRadius: 5,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
