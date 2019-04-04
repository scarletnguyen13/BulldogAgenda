import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Images from '../../assets/images/index';
import BlueButton from '../components/Buttons/BlueButton';

const WelcomeScreen = () => (
  <View style={styles.welcomeView}>
    <Image source={Images.bulldog} />
    <BlueButton
      routeName="Settings"
      width={130}
      height={60}
      margin={25}
      content="GET STARTED"
    />
  </View>
);

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;
