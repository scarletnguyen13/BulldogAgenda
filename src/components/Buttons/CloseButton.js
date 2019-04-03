import React from 'react';
import {
  TouchableOpacity, Image, View, StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Images from '../../../assets/images/index';

const CloseButton = ({ _toggle, marginLeft, marginTop }) => (
  <TouchableOpacity onPress={_toggle}>
    <View style={buttonStyle(marginLeft, marginTop)}>
      <Image
        source={Images.icon.close}
        style={styles.closeButtoneImage}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  closeButtoneImage: {
    width: 15,
    height: 15
  }
});

function buttonStyle(marginLeft, marginTop) {
  return {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#eeeded',
    marginLeft,
    marginTop,
    alignItems: 'center',
    justifyContent: 'center'
  };
}

export default withNavigation(CloseButton);
