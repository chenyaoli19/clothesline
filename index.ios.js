var MOCKED_CLOTHES_DATA = [
  {color: 'yellow', category: 'top', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View
} from 'react-native';

class Clothesline extends Component {
  render() {
    var clothes = MOCKED_CLOTHES_DATA[0];
    return (
      <View style={styles.container}>
        <Image
         source={{uri:clothes.photo.thumbnail}}
         style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.color}>{clothes.color}</Text>
          <Text style={styles.category}>{clothes.category}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer:{
    flex:1,
  },
  color:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center',
  },
  category:{
    textAlign:'center',
  },
  thumbnail:{
    width: 100,
    height: 150,
  },
});

AppRegistry.registerComponent('Clothesline', () => Clothesline);
