import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDisplay from '../screens/MealDisplay';
import RecipeDisplay from '../screens/RecipeDisplay';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Home() {
  return (
    <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
      <Screen name="home" component={MealDisplay} />
      <Screen name="recipe" component={RecipeDisplay} />
    </Navigator>
  );
}
