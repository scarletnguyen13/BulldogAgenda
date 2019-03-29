import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';

class NewsfeedScreen extends Component {
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0093ef', marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
 
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#0093ef', marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 
  _handleTextReady = () => {
    // ...
  }

  render() {
    return (
      <View style={{width: '100%', backgroundColor: 'white', padding: 15, marginBottom: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View style={styles.image} />
          <View style={{width: '90%', height: 60, justifyContent: 'center', marginLeft: 10}}>
            <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 15, color: '#140bb9'}}>Bulldog Software Co.</Text>
            <Text style={{color: '#666666'}}>2 hrs</Text>
          </View>
        </View>
        <ReadMore
          numberOfLines={10}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
          onReady={this._handleTextReady}>
          <Text style={{lineHeight: 23, marginBottom: 15}} ellipsizeMode="tail">

          As a current Science student I really have to say I absolutely regret my decision in joining this faculty. I've come to realize what an absolute joke our faculty is. Except for the Comp Sci major, you're pretty much better off going into Engineering, LFS or Forestry. Those faculties are smaller, have a much better sense of community, and actually give you knowledge and skills that are applicable to careers that exist in the real world. The worst thing to top this all off is SUS, which has the be the biggest joke in all of UBC. While other faculties have undergraduate societies that have caring and wholesome people, SUS has managed to do a horrible job at representing UBC's second largest faculty. The only thing they've managed to achieve is uniting all the integrated science "pre-med" resume padders under one roof. I took a forestry class last term and I finally saw what I was really missing out on. Not only was the professor very passionate about teaching the subject, but all the students in the class looked like they actually enjoyed being there and learning about the topic, instead of being a try-hard science student who grinds hard to study a subject they don't even like and then forgets all of it after. I don't really know why everyone even makes fun of forestry. I'd much rather be in a faculty that has engaged students and a good career outlook, instead of being a Science Snake™ who only cares about getting 20% above average on the midterm and getting elected as VP of Bullshit Affairs in SUS.

          </Text>
        </ReadMore>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="ios-heart-empty" size={25} color='black' style={{marginRight: 5}}/>
          </TouchableOpacity>
          <Text style={{color: '#666666'}}>{16}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center", 
    justifyContent: "center"
  }, 
  labelContainer: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    backgroundColor: '#e5e5e5'
  },
  label: {
    fontWeight: 'bold', 
    fontSize: 15
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black'
  }
});

export default NewsfeedScreen;