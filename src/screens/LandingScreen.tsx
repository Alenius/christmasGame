import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  View,
} from 'react-native';
import AppStyles from '../AppStyles';
import LottieView from 'lottie-react-native';

import Button from '../components/Button';

import christmasTree from '../assets/animations/christmasTree.json';

interface Props {
  navigation: Object;
}

interface Styles {
  root: ViewStyle;
  header: TextStyle;
}

const styleObject: Styles = {
  root: {
    flex: 1,
    backgroundColor: AppStyles.colors.blue1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create<Styles>(styleObject);

const LandingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppStyles.colors.blue1}}>
      <View style={styles.root}>
        <Text style={styles.header}>Julklappsspelet</Text>
        <LottieView
          source={christmasTree}
          style={{height: 500}}
          autoPlay
          loop
        />
        <View>
          <Button
            text="Starta spelet"
            style={{width: 200, height: 50, marginBottom: 10}}
            onPress={() => null}
          />
          <Button
            text="Regler"
            style={{width: 200, height: 50}}
            onPress={() => navigation.navigate('Rules')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
