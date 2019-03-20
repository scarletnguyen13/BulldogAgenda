import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Images from '../../assets/images/index';

class CloseButton extends Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={this.props._toggle}>
        <View style={buttonStyle(this.props.marginLeft, this.props.marginTop)}>
        <Image 
          source={Images.icon.close}
          style={styles.closeButtoneImage}/>
        </View>
      </TouchableOpacity>
    );
  }
}

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
    backgroundColor: "#eeeded",
    marginLeft: marginLeft,
    marginTop: marginTop,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default withNavigation(CloseButton);


//onPress, marginLeft, marginTop
