import React from 'react';
import {
  TouchableOpacity, View, StyleSheet, Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Images from '../../../assets/images/index';

const NextButton = ({ navigation }) => (
  <View style={styles.nextButtonView}>
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <View style={styles.nextButton}>
        <Image
          source={Images.icon.arrow}
          style={styles.nextButtonImage}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nextButtonView: {
    flex: 0.4,
    alignItems: 'flex-end',
    paddingRight: 20
  },
  nextButton: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#140bb9',
    margin: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButtonImage: {
    width: 20,
    height: 20
  }
});

export default withNavigation(NextButton);
