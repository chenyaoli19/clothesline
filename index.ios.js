var MOCKED_CLOTHES_DATA = [
  {color: 'yellow', category: 'top', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'red', category: 'bottom', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'blue', category: 'jacket', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'purple', category: 'sweater', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'green', category: 'pants', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'orange', category: 'accessory', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'silver', category: 'skirt', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
  {color: 'black', category: 'shorts', photo: {thumbnail: 'http://dolcifollie.co.uk/media/catalog/product/cache/1/image/1300x1840/9df78eab33525d08d6e5fb8d27136e95/m/n/mn11a8yw_made_by_niki_yellow_trapeze_peplum_top_f.jpg'}},
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
} from 'react-native';

class Clothesline extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_CLOTHES_DATA),
      loaded:true,
    });
  }
  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          Loading Clothes...
        </Text>
      </View>
    );
  }
  renderClothes(item){
    return (
      <View style={styles.container}>
        <Image
          source = {{uri: item.photo.thumbnail}}
          style = {styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.color}>{item.color}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
      </View>
    );
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderClothes}
        style={styles.listView}
      />
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
  listView:{
    paddingTop:20,
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
