import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CalendarEventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: 0
    }
    this.changeHeight = this.changeHeight.bind(this);
  }

  changeHeight(height) {
    this.setState({containerHeight: height});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.outerCircle, setBackgroundColor(this.props.courseColor)]}>
         <View style={styles.innerCircle}>
          {this.props.completed === false && <View style={[styles.checkCircle, setBackgroundColor(this.props.courseColor)]}/>}
         </View>
        </View>
        <View style={styles.textContainer}>
          {this.props.course !== undefined && 
          <Text style={{marginBottom: 10}}>{this.props.course}</Text>}
          <Text 
            style={styles.contentText}
            onLayout = {( value ) => this.changeHeight( value.nativeEvent.layout.height )}>
              {this.props.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginLeft: 35,
    width: 230,
    justifyContent: 'center'
  },
  courseText: {
    fontSize: 12,
    color: '#6c6c6c'
  },
  contentText: {
    fontWeight: 'bold'
  },
  checkCircle: {
    width: 6,
    height: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function setBackgroundColor(color) {
  return {
    backgroundColor: color
  };
}

export default CalendarEventItem;