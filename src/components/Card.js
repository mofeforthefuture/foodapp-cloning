import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {Love, Ellipse} from '../constants/icons';

export default function Card({avatar, image, onPress}) {
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
          Calum Lewis
        </Text>
      </View>

      <ImageBackground
        source={image}
        resizeMode="contain"
        style={{
          width: '100%',
          height: '80%',
          alignItems: 'flex-end',
          marginBottom: '-40%',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 5,
            margin: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Image source={Love} resizeMode="contain" style={{width: 25}} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{width: '100%'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 27,
            color: COLORS.primaryTxt,
            marginBottom: SIZES.margin / 4,
          }}>
          Pancake
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: SIZES.padding,
          }}>
          <Text style={styles.text}>Food</Text>
          <Image source={Ellipse} />
          <Text style={styles.text}>{'>'}60 mins</Text>
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
    marginVertical: SIZES.margin,
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
});