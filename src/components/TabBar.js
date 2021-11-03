import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../screens/Profile';
import RecipeDisplay from '../screens/RecipeDisplay';
import React from 'react';
import {COLORS} from '../constants';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export default function TabBar() {
  return (
    <Navigator
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'none', fontWeight: '600'},
        tabBarIndicatorStyle: {backgroundColor: COLORS.green},
      }}>
      <Screen name="Left" component={Profile} />
      <Screen name="Right" component={RecipeDisplay} />
    </Navigator>
  );
}
