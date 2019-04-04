import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Linking
} from 'react-native';

const URLPreview = ({ linkURL, linkTitle, linkDescription }) => (
  <TouchableOpacity
    style={styles.linkContainer}
    onPress={() => Linking.openURL(linkURL)}
  >
    <View style={styles.horizontallyCentered}>
      <Text style={styles.linkURL} numberOfLines={1} ellipsizeMode="tail">{linkURL.replace(/(^\w+:|^)\/\//, '').trim()}</Text>

      {linkTitle !== undefined && <Text style={styles.linkTitle} numberOfLines={1} ellipsizeMode="tail">{linkTitle}</Text>}

      {linkDescription !== undefined && <Text style={styles.linkDescription} numberOfLines={1} ellipsizeMode="tail">{linkDescription}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: '#efefef',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#6b6a6a'
  },
  horizontallyCentered: {
    justifyContent: 'center'
  },
  linkURL: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#6b6a6a'
  },
  linkTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10
  },
  linkDescription: {
    fontSize: 14,
    marginTop: 10,
    color: '#6b6a6a'
  }
});

export default URLPreview;
