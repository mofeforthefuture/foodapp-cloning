import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES} from '../constants/theme';
import MealDisplay from '../screens/MealDisplay';
import {Image} from 'react-native';
import {
  HomeIcon,
  EditIcon,
  ProfileIcon,
  NotificationIcon,
  ScanIcon,
} from '../constants/icons';
import RecipeDisplay from '../screens/RecipeDisplay';
import Scan from '../screens/Scan';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './home.stack';

const {Navigator, Screen} = createBottomTabNavigator();

const Router = props => {
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
                  height: 70,
                },
              }
        }>
        <Screen
          name="mealDisplay"
          component={Home}
          options={{
            tabBarLabel: 'Home',
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
            tabBarLabel: 'Upload',
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
            tabBarLabel: 'Scan',
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.green,
                  height: 56,
                  width: 56,
                  borderRadius: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}>
                <Image
                  style={{
                    tintColor: '#ffffff',
                    resizeMode: 'contain',
                    width: 60,
                  }}
                  source={ScanIcon}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Screen
          name="notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notification',
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
            tabBarLabel: 'Profile',
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
export default Router;
