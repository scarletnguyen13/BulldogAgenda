import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getContrastYIQ from '../ContrastHelper';
import CalendarBlock from './CalendarBlock';

class TimetableDailyBlock extends Component {
  constructor(props) {
      super(props);
      this.state = { 
         expand: true,
         containerHeight: this.props.height,
         expandedViewHeight: 0,
         icon: 'ios-arrow-down'
      }
      this.isExpanded = this.isExpanded.bind(this);
      this.changeHeight = this.changeHeight.bind(this);
  }

  isExpanded = () => { 
    const { expand } = this.state;
    this.setState({ 
      icon: expand ? 'ios-arrow-up' : 'ios-arrow-down',
      expand: !expand
    })
  }

  changeHeight(height) {
    var CustomLayoutLinear = {
      duration: 30,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.curveEaseInEaseOut,
      },
    };
    LayoutAnimation.configureNext(CustomLayoutLinear);
    this.setState({ 
      expandedViewHeight: height,
      containerHeight: this.props.height + height
    });
  }

  render() {
    const color = this.props.courseColor;
    return (
      <View style={{borderWidth: 10, borderColor: color, margin: 1, height: this.state.containerHeight}}>
        <TouchableHighlight 
          style={{flex: 1}}
          onPress = { this.isExpanded }>
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
              <Icon name={this.state.icon} size={35} color={getContrastYIQ(color)} />
          </View>
        </TouchableHighlight>

        <View 
          style={{display: this.state.expand ? 'none' : 'flex'}}
          onLayout = {( value ) => this.changeHeight( value.nativeEvent.layout.height )}>
          <CalendarBlock courseColor = '#8BC34A'/>
          <CalendarBlock courseColor = '#E91E63'/>
          <CalendarBlock courseColor = '#FFEB3B'/>
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

export default TimetableDailyBlock;