import React, {Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import LandingScreen from './src/screens/LandingScreen';
import RulesScreen from './src/screens/RulesScreen';

const LandingStack = createStackNavigator({
  Landing: {screen: LandingScreen, navigationOptions: {header: null}},
  Rules: {screen: RulesScreen, navigationOptions: {headerTitle: 'Regler'}},
});

const AppNavigator = createAppContainer(LandingStack);

const App = () => {
  return <AppNavigator />;
};

export default App;
