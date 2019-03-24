import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getContrastYIQ from '../ContrastHelper';

class TimetableDailyBlock extends Component {
  constructor(props) {
      super(props);
      this.state = { 
         textLayoutHeight: 0,
         updatedHeight: 0, 
         expand: false
      }
  }

  expandCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this.state.expand) {
      this.setState({ 
        updatedHeight: 0, 
        expand: false, 
      });
    } else {
      this.setState({ 
        updatedHeight: this.state.textLayoutHeight, 
        expand: true, 
      }); 
    }
  }
 
  getHeight(height) {
    this.setState({ textLayoutHeight: height });
  }

  render() {
    const color = this.props.courseColor;
    return (
      <View style={[{borderWidth: 2,
        borderColor: color,
        margin: 1}, setSize(this.props.flex)]}>
        <TouchableOpacity 
          style={{flex: 1}}
          onPress = { this.expandCollapse }>
          <View style={[styles.container, setbBackgroundColor(color)]}>
            <View style={[
              styles.indicator, 
              setBackgroundContrastColor(color),
              setVisible(this.props.isVisible)
            ]}/>
            <Text style={[styles.blockText, setContrastColor(color)]}>{this.props.courseBlock}</Text>
            <View style={styles.centerContainer}>
              <Text style={[styles.courseText, setContrastColor(color)]}>
                {this.props.courseName}
              </Text>
              <Text style={setContrastColor(color)}>{this.props.courseRoom}</Text>
            </View>
              <Icon name="ios-arrow-down" size={35} color={getContrastYIQ(color)} />
          </View>
        </TouchableOpacity>

        <View style = {{ height: this.state.updatedHeight, overflow: 'hidden' }}>
          <Text style = { styles.ExpandViewInsideText } 
                onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height )}>
              
              Hello Developers, A warm welcome on ReactNativeCode.com, The best website for react native developers.
              You can find high quality dynamic type of tutorials with examples on my website and to support us please like our Facebook page.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30
  },
  indicator: {
    width: '2.5%', 
    height: '60%'
  },
  blockText: {
    fontSize: 15,
    marginLeft: '10%'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 30,
    marginLeft: 30
  },
  courseText: {
    marginBottom: 20, 
    fontSize: 23
  },
  ExpandViewInsideText: {
      fontSize: 16,
      color: '#000',
      padding: 12
  }
});

function setbBackgroundColor(color) {
  return {
    backgroundColor: color
  }
}

function setContrastColor(color) {
  return {
    color: getContrastYIQ(color)
  }
}

function setBackgroundContrastColor(color) {
  return {
    backgroundColor: getContrastYIQ(color)
  }
}

function setVisible(bool) {
  return {
    opacity: bool ? 1 : 0
  }
}

function setSize(size) {
  return {
    flex: size
  }
}

export default TimetableDailyBlock;