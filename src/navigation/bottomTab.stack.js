import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from '../context/LanguageContext';
import {COLORS, SIZES} from '../constants/theme';
import {Image, View} from 'react-native';
import {
  HomeIcon,
  EditIcon,
  ProfileIcon,
  NotificationIcon,
  ScanIcon,
} from '../constants/icons';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import RecipeDisplay from '../screens/RecipeDisplay';
import Scan from '../screens/Scan';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Home from './home.stack';
const {Navigator, Screen} = createBottomTabNavigator();

const BottomTab = props => {
  const {home, upload, scan, notification, profile} = useTranslation();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={
          Platform.OS == 'ios'
            ? {
                keyboardHidesTabBar: true,
                activeTintColor: COLORS.green,
                inactiveTintColor: COLORS.navcolor,
                allowFontScaling: true,
                labelStyle: {
                  backgroundColor: COLORS.white,
                  fontSize: SIZES.font,
                },
                style: {
                  height: 100,
                },
              }
            : {
                keyboardHidesTabBar: true,
                activeTintColor: COLORS.green,
                inactiveTintColor: COLORS.navcolor,
                allowFontScaling: true,
                labelStyle: {
                  height: 20,
                  backgroundColor: COLORS.white,
                  fontSize: SIZES.font,
                },
                style: {
                  height: 100,
                },
              }
        }>
        <Screen
          name="mealDisplay"
          component={Home}
          options={{
            tabBarLabel: `${home}`,
            tabBarIcon: ({color, size}) => (
              <Image
                style={{
                  tintColor: color,
                  resizeMode: 'contain',
                  width: 20,
                }}
                source={HomeIcon}
              />
            ),
          }}
        />
        <Screen
          name="recipeDisplay"
          component={RecipeDisplay}
          options={{
            tabBarLabel: `${upload}`,
            tabBarIcon: ({color, size}) => (
              <Image
                style={{
                  tintColor: color,
                  resizeMode: 'contain',
                  width: 40,
                }}
                source={EditIcon}
              />
            ),
          }}
        />
        <Screen
          name="scan"
          component={Scan}
          options={{
            tabBarLabel: `${scan}`,
            tabBarIcon: ({color, size}) => (
              <View
                style={{
                  backgroundColor: COLORS.green,
                  height: 56,
                  width: 56,
                  borderRadius: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 30,
                }}>
                <Image
                  style={{
                    tintColor: '#ffffff',
                    resizeMode: 'contain',
                    width: 60,
                  }}
                  source={ScanIcon}
                />
              </View>
            ),
          }}
        />
        <Screen
          name="notification"
          component={Notification}
          options={{
            tabBarLabel: `${notification}`,
            tabBarIcon: ({color, size}) => (
              <Image
                style={{
                  tintColor: color,
                  resizeMode: 'contain',
                  width: 40,
                }}
                source={NotificationIcon}
              />
            ),
          }}
        />
        <Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: `${profile}`,
            tabBarIcon: ({color, size}) => (
              <Image
                style={{
                  tintColor: color,
                  resizeMode: 'contain',
                  width: 40,
                }}
                source={ProfileIcon}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default BottomTab;
