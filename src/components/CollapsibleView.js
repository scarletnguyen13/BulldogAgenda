import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getContrastYIQ from './ContrastHelper';

class CollapsibleView extends Component {
  constructor(props) {
    super(props);
    const { expand, height } = this.props;
    this.state = {
      expand,
      containerHeight: height,
      icon: expand ? 'ios-arrow-down' : 'ios-arrow-up'
    };
    this.isExpanded = this.isExpanded.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
  }

  isExpanded = () => {
    const { expand } = this.state;
    this.setState({
      icon: expand ? 'ios-arrow-up' : 'ios-arrow-down',
      expand: !expand
    });
  }

  changeHeight(newHeight) {
    const { height } = this.props;
    const CustomLayoutLinear = {
      duration: 50,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(CustomLayoutLinear);
    this.setState({
      containerHeight: height + newHeight
    });
  }

  render() {
    const {
      courseColor, borderWidth, isVisible, courseName, courseRoom, courseBlock, children
    } = this.props;
    const { containerHeight, icon, expand } = this.state;

    return (
      <View style={[
        setBorderWidth(borderWidth),
        setHeight(containerHeight),
        setBorderColor(courseColor)]}
      >
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={this.isExpanded}
        >
          <View style={[styles.innerContainer, setbBackgroundColor(courseColor)]}>
            <View style={[
              styles.indicator,
              setBackgroundContrastColor(courseColor),
              setVisible(isVisible)]}
            />
            <Text style={[styles.blockText, setContrastColor(courseColor)]}>{courseBlock}</Text>
            <View style={styles.centerContainer}>
              <Text style={[styles.courseText, setContrastColor(courseColor), { fontSize: typeof courseName === 'string' && courseName.length > 13 ? 19 : 23 }]}>
                {courseName}
              </Text>
              <Text style={setContrastColor(courseColor)}>{courseRoom}</Text>
            </View>
            <Icon
              name={icon}
              size={35}
              color={getContrastYIQ(courseColor)}
            />
          </View>
        </TouchableHighlight>

        <View
          style={{ display: expand ? 'none' : 'flex' }}
          onLayout={value => this.changeHeight(value.nativeEvent.layout.height)}
        >
          {children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
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
    fontSize: 17,
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
  }
});

function setbBackgroundColor(color) { return { backgroundColor: color }; }

function setContrastColor(color) { return { color: getContrastYIQ(color) }; }

function setBackgroundContrastColor(color) { return { backgroundColor: getContrastYIQ(color) }; }

function setVisible(bool) { return { opacity: bool ? 1 : 0 }; }

function setHeight(number) { return { height: number }; }

function setBorderColor(color) { return { borderColor: color }; }

function setBorderWidth(number) { return { borderWidth: number }; }

export default CollapsibleView;
