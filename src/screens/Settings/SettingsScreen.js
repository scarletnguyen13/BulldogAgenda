import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import BlockButton from '../../components/Buttons/BlockButton';
import NextButton from '../../components/Buttons/NextButton';
import DayText from '../../components/Texts/DayText';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#140bb9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  }

  render() {
    const { blocks } = this.props;
    return (
      <ScrollView>
        <View>
          <View>
            <DayText day="Day 1" />

            <View style={styles.columnView}>
              <View style={styles.rowView}>
                <BlockButton courseInfo={blocks.block1_1} />
                <BlockButton courseInfo={blocks.block1_2} />
              </View>

              <View style={styles.rowView}>
                <BlockButton courseInfo={blocks.block1_3} />
                <BlockButton courseInfo={blocks.block1_4} />
              </View>
            </View>
          </View>

          <View>
            <DayText day="Day 2" />

            <View style={styles.columnView}>
              <View style={styles.rowView}>
                <BlockButton courseInfo={blocks.block2_1} />
                <BlockButton courseInfo={blocks.block2_2} />
              </View>

              <View style={styles.rowView}>
                <BlockButton courseInfo={blocks.block2_3} />
                <BlockButton courseInfo={blocks.block2_4} />
              </View>
            </View>
          </View>

          <NextButton />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
  },
  columnView: {
    flexDirection: 'column',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  const { blocks } = state;
  return { blocks };
};

export default connect(mapStateToProps)(SettingsScreen);
